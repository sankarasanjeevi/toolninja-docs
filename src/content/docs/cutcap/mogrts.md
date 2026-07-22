---
title: Push as MOGRTs
description: Place every caption as a styleable Motion Graphics Template clip, with a template gallery and auto-rendered previews.
---

Beyond a plain caption track, CutCap can place your captions as **Motion Graphics Template (MOGRT) clips** — fully styleable in Premiere's Essential Graphics panel.

## Placing captions as MOGRTs

The **MOGRT** button (next to Push) opens a **template gallery** and places **every caption as a Motion Graphics Template clip** on a fresh video track, at each caption's exact timing. Once placed, style them like any MOGRT in Premiere's **Essential Graphics** panel.

## The template gallery

- Pick from the **bundled templates**, or add your own with **+**.
- Added templates are copied into your library at `Documents\CutCap\MOGRTs`.
- Organize templates into **folders** within the gallery.

:::note[Bring your own templates]
Any **After Effects–made** `.mogrt` with a text field works. Templates made **inside Premiere** can't be driven by text, so they won't accept caption text.
:::

## Previews

- When you **add a template**, CutCap **auto-renders a hover preview** (Premiere blocks for a few seconds while it renders).
- The **Render previews** button fills in previews for bundled or older templates.
- Previews **play on hover**, or loop always via the toggle. You can also drop your own video with the same name next to a `.mogrt` to use as its preview.

## Placing a long list

Placing is **one clip per caption**, so a long list takes a moment — a **progress bar** counts along, and **closing it stops** the batch.

:::caution
Because each caption is its own clip, **undoing a push is one `Ctrl+Z` per clip**. To remove a large batch, it's often faster to delete the MOGRT track directly.
:::

## Next steps

- [Appearance & settings](/toolninja-docs/cutcap/settings/)
