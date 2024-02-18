import React from 'react'

const SkillsTable = () => {
  return (
    <table>
        <tr>
            <th>Frontend</th>
            <td>ReactJs, NextJs, Bootstrap, TailwindCSS, Strict Typesript</td>
        </tr>

        <tr>
            <th>Backend</th>
            <td>NodeJs, ExpressJs, Django, Flask, MongoDB, Postgres, Prisma</td>
        </tr>

        <tr>
            <th>Advanced</th>
            <td>Zod, Firebase, Docker, Redis, Sockets, pub-sub, Queues, Celery</td>
        </tr>

        <tr>
            <th>Deployment</th>
            <td>AWS EC2, nginx, SSL, AWS ECS(container), CI/CD, Piplines</td>
        </tr>

        <tr>
            <th>Testing</th>
            <td>Unit, Integration, and end-to-end testing (jest, pytest)</td>
        </tr>

        <tr>
            <th>Monitoring</th>
            <td>Prometheus, Loki, Grafana</td>
        </tr>

    </table>
  )
}

export default SkillsTable