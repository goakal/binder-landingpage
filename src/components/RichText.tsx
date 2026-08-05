import { Fragment } from 'react';

/**
 * Renders `**bold**` spans and newlines, so translated copy can live in the
 * dictionaries as plain strings instead of JSX.
 */
export const RichText = ({ text }: { text: string }) => (
  <>
    {text.split('\n').map((line, lineIndex, lines) => (
      <Fragment key={lineIndex}>
        {line.split('**').map((part, i) => (i % 2 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>))}
        {lineIndex < lines.length - 1 && <br />}
      </Fragment>
    ))}
  </>
);
