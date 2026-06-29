import './App.css'

function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-5">
        <div className="col-lg-7">
          <span className="badge bg-primary-subtle text-primary-emphasis mb-3">
            OctoFit Tracker
          </span>
          <h1 className="display-4 fw-bold">Modern fitness tracking for teams.</h1>
          <p className="lead text-muted">
            Log workouts, build teams, and stay motivated with a polished multi-tier experience.
          </p>
          <div className="d-flex gap-3 mt-4">
            <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">
              Check API
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="https://vite.dev/" target="_blank">
              Vite Docs
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 fw-semibold">Ready to launch</h2>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item px-0">React 19 + Vite frontend</li>
                <li className="list-group-item px-0">Express + TypeScript backend</li>
                <li className="list-group-item px-0">MongoDB with Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
