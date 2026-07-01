body.codex-body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: radial-gradient(circle at top, #3b1f5f, #05030a);
  color: #f5f0ff;
}

.codex-header {
  padding: 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, #5b2b8a, #1b0b33);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.codex-header h1 {
  margin: 0;
  letter-spacing: 0.15em;
}

.codex-header p {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

.codex-nav {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.codex-nav button {
  background: #2b1746;
  border: 1px solid #7c4fd1;
  color: #f5f0ff;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.8rem;
}

.codex-nav button:hover {
  background: #7c4fd1;
}

.codex-section {
  display: none;
  padding: 1.5rem;
}

.codex-section.active {
  display: block;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.realm-card {
  background: rgba(10, 5, 25, 0.9);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.realm-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.8);
}

.realm-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #7c4fd1;
  margin-bottom: 0.5rem;
}

.empty-msg {
  opacity: 0.7;
}

.realm-detail {
  position: relative;
  padding: 0;
}

.realm-detail.hidden {
  display: none;
}

.realm-detail-inner {
  position: relative;
  min-height: 60vh;
  background-size: cover;
  background-position: center;
}

.realm-detail-overlay {
  position: relative;
  background: linear-gradient(to bottom, rgba(5, 3, 10, 0.7), rgba(5, 3, 10, 0.95));
  padding: 2rem;
}

.back-btn {
  margin: 1rem;
  background: #2b1746;
  border: 1px solid #7c4fd1;
  color: #f5f0ff;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  cursor: pointer;
}

.codex-footer {
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  background: #05030a;
  border-top: 1px solid #2b1746;
}

#ambient-toggle {
  background: #2b1746;
  border: 1px solid #7c4fd1;
  color: #f5f0ff;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  cursor: pointer;
}

/* Admin tweaks */

.admin-body .codex-header {
  background: linear-gradient(135deg, #8b3fd1, #2b1746);
}

.admin-panel {
  display: none;
  padding: 1.5rem;
}

.admin-panel.active {
  display: block;
}

.json-output {
  width: 100%;
  min-height: 160px;
  margin-top: 0.8rem;
  background: #05030a;
  color: #f5f0ff;
  border-radius: 8px;
  border: 1px solid #7c4fd1;
  padding: 0.6rem;
  font-family: monospace;
  font-size: 0.8rem;
}

label {
  display: block;
  margin-top: 0.8rem;
  font-size: 0.85rem;
}

input, textarea {
  width: 100%;
  margin-top: 0.3rem;
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
  border: 1px solid #2b1746;
  background: #0b0615;
  color: #f5f0ff;
  font-size: 0.85rem;
}

button#build-realm-json {
  margin-top: 1rem;
  background: #7c4fd1;
  border: none;
  color: #f5f0ff;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  cursor: pointer;
}
