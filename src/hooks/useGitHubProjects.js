import { useState, useEffect, useCallback } from 'react'

export function useGitHubProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProjects = useCallback(async (signal) => {
    setLoading(true)
    setError(null)

    try {
      const token = import.meta.env.VITE_GITHUB_TOKEN
      if (!token) {
        throw new Error(
          'VITE_GITHUB_TOKEN tidak ditemukan. Pastikan token GitHub sudah diset di file .env untuk mengakses endpoint /user/repos.'
        )
      }

      const headers = {
        Accept: 'application/vnd.github+json',
        Authorization: token.startsWith('Bearer ') || token.startsWith('token ')
          ? token
          : `Bearer ${token}`,
      }

      const response = await fetch(
        'https://api.github.com/user/repos?affiliation=owner,collaborator&sort=updated&per_page=100',
        {
          headers,
          signal,
        }
      )

      if (!response.ok) {
        let errorMessage = `Gagal memuat repositori (${response.status}: ${response.statusText})`
        try {
          const errData = await response.json()
          if (errData?.message) {
            errorMessage += ` - ${errData.message}`
          }
        } catch {
          // Abaikan kesalahan saat parsing JSON error
        }
        throw new Error(errorMessage)
      }

      const data = await response.json()

      if (!Array.isArray(data)) {
        throw new Error('Format data GitHub tidak valid.')
      }

      // Filter menyingkirkan repository hasil fork (repository.fork === false)
      const originalRepos = data.filter((repo) => repo.fork === false)

      // Ekstrak data yang diperlukan: name, description, html_url, dan topics
      const extractedProjects = originalRepos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        topics: Array.isArray(repo.topics) ? repo.topics : [],
        language: repo.language,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        updated_at: repo.updated_at,
        owner: repo.owner?.login,
      }))

      setProjects(extractedProjects)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Terjadi kesalahan saat memuat data proyek.')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    fetchProjects(controller.signal)

    return () => {
      controller.abort()
    }
  }, [fetchProjects])

  return {
    projects,
    loading,
    error,
    refetch: () => fetchProjects(),
  }
}

export default useGitHubProjects
