/**
 * Flashcard — the 3D flip card.
 * Markup: mockups/study.html (.card-stack > .flashcard block)
 *
 * Props: { card, flipped, onFlip }
 *
 * BUILD:
 *  - Add "flashcard__inner--flipped" when flipped — the CSS does the rotation.
 *  - Front: card.tags[0], difficulty badge, card.question.
 *  - Back:  card.answer, plus <pre className="flashcard__code"> when card.code exists.
 *  - The wrapper needs tabIndex={0}, role="button" and an onKeyDown handling
 *    Enter/Space so it is operable without a mouse.
 *  - Do NOT animate on the very first render — key the card by card.id so
 *    React remounts it and the flip state resets cleanly between cards.
 */

export default function Flashcard() {
  return null; // TODO
}
