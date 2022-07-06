import React from 'react'

export function RepositoryItem({ repository, description, link }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Default'}</p>

      <a href={repository.link}>
        Acessar repositório
      </a>
  </li>
  )
}
