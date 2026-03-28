const sampleTasks = [
  {
    title: "Plan the day in 3 tasks",
    status: "Now",
    done: false
  },
  {
    title: "Finish the first homepage",
    status: "Next",
    done: false
  },
  {
    title: "Push the first Prisma model",
    status: "Later",
    done: true
  }
];

const steps = [
  {
    title: "Write it down",
    description: "Capture one small task instead of carrying everything in your head."
  },
  {
    title: "Pick a focus",
    description: "Choose what matters now so the list stays short and useful."
  },
  {
    title: "Finish and reset",
    description: "Complete the task, clear it, and move to the next one without noise."
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">FocusList</p>
          <h1>Keep today small enough to finish.</h1>
          <p className="hero-text">
            A tiny task app for learning full-stack development from scratch.
            No clutter, no complex flows, just a short list and one clear next
            action.
          </p>

          <div className="hero-actions">
            <a className="primary-link" href="#today">
              See the first screen
            </a>
            <p className="secondary-note">
              First milestone: build a clean daily list before adding auth,
              teams, or extra features.
            </p>
          </div>
        </div>

        <aside className="preview-card" id="today" aria-label="Today preview">
          <div className="preview-card__header">
            <div>
              <p className="preview-label">Today</p>
              <h2>3 tasks, 1 priority</h2>
            </div>
            <span className="preview-pill">Simple start</span>
          </div>

          <ul className="task-list">
            {sampleTasks.map((task) => (
              <li className="task-item" key={task.title}>
                <span
                  aria-hidden="true"
                  className={task.done ? "task-dot task-dot--done" : "task-dot"}
                />
                <div className="task-copy">
                  <p className={task.done ? "task-title task-title--done" : "task-title"}>
                    {task.title}
                  </p>
                  <p className="task-status">{task.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="info-grid">
        <article className="info-card">
          <p className="info-label">Why this project</p>
          <h2>Small scope makes the learning sharper.</h2>
          <p>
            FocusList is intentionally narrow. That keeps the code readable and
            makes every new layer easier to understand.
          </p>
        </article>

        <div className="steps-card">
          <p className="info-label">How the app should feel</p>
          <div className="steps-list">
            {steps.map((step) => (
              <article className="step-item" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
