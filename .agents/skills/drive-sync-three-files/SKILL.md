---
name: drive-sync-three-files
description: Link or upload the three designated files in the Porfolio-Build project to Google Drive when the user asks to sync, upload, update, or link them.
---

# Drive sync for the three project files

Use this skill when the user asks to upload, update, link, or sync the three files in this project with their Google Drive versions.

## Setup and identification

1. Work from the project root `D:\Work-Study\Porfolio-Build`.
2. Inspect the current project and its existing README, deployment notes, and version-control state. Identify the three intended deliverables from project documentation or the user's current instruction. Do not assume that there are only three files in the folder or select three arbitrarily.
3. If the three files are not unambiguously identified, ask the user which three, then record their relative paths and intended Drive destination in this skill's configuration section below once known.
4. Inspect current Drive integration availability. Prefer the connected Google Drive app/plugin when it is available. If unavailable, explain that limitation and use the user's explicitly requested browser/UI workflow only when available; never claim an upload succeeded without confirming it in Drive.

## On each sync request

1. Interpret “link” as either adding/refreshing a Drive URL in the project or uploading/updating a Drive copy. If context does not distinguish these, inspect project documentation and Drive items first; ask only if the destination or action remains ambiguous.
2. Read the current local versions and compare them with the target Drive files before changing anything.
3. For each of the three configured files, update the matching Drive item when identity is clear; otherwise create the copy in the configured folder. Avoid duplicate uploads by searching for the existing item by name and, when available, existing Drive file ID.
4. Obtain a share link only if the user's existing Drive permissions and the available tools permit it. Never broaden link access or change sharing visibility beyond the user's stated request.
5. If the user asks to link these files in this project, update the relevant project index/README with the verified Drive URLs. Preserve the existing style and do not overwrite unrelated project content.
6. Verify all three outcomes by reopening or inspecting the Drive items and confirm each URL points to the intended file. Report any failed or unverified item plainly.

## Safety and reporting

- A user request to sync these three files authorizes the corresponding uploads/updates for this project. It does not authorize deleting Drive files, changing permissions, or moving unrelated items.
- Preserve local files. Do not delete or overwrite unrelated Drive content.
- Report the three local paths, Drive action for each, and verified link(s) in the completion summary.
- If Google Drive is disabled or unavailable, do not attempt to bypass the restriction. Complete any independent local preparation and tell the user what connection is needed.

## Project-specific configuration

- Project root: `D:\Work-Study\Porfolio-Build`
- Three local file paths: **Not yet identified.** Determine from project documentation or ask the user; do not guess.
- Google Drive destination folder: **Not yet identified.** Determine from project documentation or ask the user; do not guess.
- Existing Drive file IDs/URLs: **Not yet recorded.** Resolve before first update and record verified mappings here.
