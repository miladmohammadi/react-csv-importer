import React from 'react';
import { useLocale } from '../../locale/LocaleContext';

import { FormatErrorMessage } from './FormatErrorMessage';

import './FormatRawPreview.scss';

const RAW_PREVIEW_SIZE = 500;

export const FormatRawPreview: React.FC<{
  chunk: string;
  warning?: Papa.ParseError;
  onCancelClick: () => void;
  sx?: any;
  // eslint-disable-next-line react/display-name
}> = React.memo(({ chunk, warning, onCancelClick, sx }) => {
  const chunkSlice = chunk.slice(0, RAW_PREVIEW_SIZE);
  const chunkHasMore = chunk.length > RAW_PREVIEW_SIZE;

  const { getWarningText } = useLocale('FormatRawPreview');

  return (
    <div
      className="CSVImporter_FormatRawPreview"
      css={sx?.FormatRawPreview ?? null}
    >
      <div
        className="CSVImporter_FormatRawPreview__scroll"
        css={sx?.FormatRawPreviewScroll ?? null}
      >
        <pre
          className="CSVImporter_FormatRawPreview__pre"
          css={sx?.FormatRawPreviewPre ?? null}
        >
          {chunkSlice}
          {chunkHasMore && <aside>...</aside>}
        </pre>
      </div>

      {warning ? (
        <FormatErrorMessage onCancelClick={onCancelClick}>
          {getWarningText(warning.message || String(warning))}
        </FormatErrorMessage>
      ) : null}
    </div>
  );
});
