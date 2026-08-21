# SCP-8707: The Arcade Archive

An interactive browser-based SCP archival horror experience. Follow a recovered 1991 incident trail through Site-192 records, a legacy magnetic-medium terminal, a dormant observation array, and five live containment tests.

## Repository name

`scp-8707-arcade-archive`

Suggested GitHub description:

> A browser-based SCP archival horror experience with five interactive containment tests.

## Experience flow

1. **FORA terminal** — review Incident 8707-C4 and its linked records.
2. **SCP-8707 archive** — inspect the cabinet and the 1991 containment failure.
3. **RX-1715 recovery** — mount the surviving PROJECT ARCADE medium.
4. **Observation array** — activate a credential dormant for thirty-five years.
5. **Protocol 8708-A** — open the sealed interaction payload.
6. **Interaction console** — complete Recall, Barrier, Load, Recovery, and Extraction tests.

## Run locally

The project is static and has no build step. Serve the repository root with any local HTTP server, then open `index.html`.

```bash
npx serve .
```

Opening files directly with `file://` is not recommended because iframe and browser security behavior varies.

## Controls

- `W A S D` or arrow keys — directional input
- `Space`, `Enter`, or **ACT** — primary action
- Drag the generated test token into the slot to begin the sequence

## Deployment

The included GitHub Actions workflow deploys the repository root to GitHub Pages.

1. Create a public repository named `scp-8707-arcade-archive`.
2. Push this project to the `main` branch.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. The deployment workflow will publish the site automatically.

No API keys, environment variables, package installation, or build artifacts are required.

## Technology

- HTML, CSS, Canvas, Web Audio, and WebGL
- GSAP 3.12.2 and Draggable
- Matter.js 0.19.0
- Three.js r128

Runtime libraries are loaded from cdnjs. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## License and SCP attribution

This is an unofficial derivative work based on the SCP Foundation collaborative fiction project. SCP-related concepts are attributed to the [SCP Foundation](https://scp-wiki.wikidot.com/) and its contributors.

The project is released under [Creative Commons Attribution-ShareAlike 3.0 Unported](LICENSE). Reuse must include attribution and use the same or a compatible ShareAlike license.

This project is not affiliated with or endorsed by the SCP Wiki, Wikidot, or the SCP Foundation community.

