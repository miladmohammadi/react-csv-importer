import React, { useRef, useEffect } from 'react';

import { TextButton } from './TextButton';
import { IconButton } from './IconButton';

import './ImporterFrame.scss';
import { useLocale } from '../locale/LocaleContext';

export const ImporterFrame: React.FC<{
  fileName: string;
  subtitle?: string; // @todo allow multiple crumbs
  secondaryDisabled?: boolean;
  secondaryLabel?: string;
  nextDisabled?: boolean;
  nextLabel?: string;
  error?: string | null;
  onSecondary?: () => void;
  onNext: () => void;
  onCancel?: () => void;
  sx?: any;
}> = ({
  fileName,
  subtitle,
  secondaryDisabled,
  secondaryLabel,
  nextDisabled,
  nextLabel,
  error,
  onSecondary,
  onNext,
  onCancel,
  children,
  sx
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (subtitleRef.current) {
      subtitleRef.current.focus();
    } else if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  const { previousStepText, nextStepText } = useLocale('ImporterFrame');

  return (
    <div className="CSVImporter_ImporterFrame" css={sx?.ImporterFrameStyles}>
      <div
        className="CSVImporter_ImporterFrame__header"
        css={sx?.ImporterFrameHeaderStyles}
      >
        <IconButton
          label={previousStepText}
          type="arrowBack"
          disabled={!onCancel}
          onClick={onCancel}
        />

        <div
          className="CSVImporter_ImporterFrame__headerTitle"
          css={sx?.ImporterFrameHeaderTitleStyles}
          tabIndex={-1}
          ref={titleRef}
        >
          {fileName}
        </div>

        {subtitle ? (
          <>
            <div
              className="CSVImporter_ImporterFrame__headerCrumbSeparator"
              css={sx?.ImporterFrameHeaderCrumbSeparatorStyles}
            >
              <span />
            </div>
            <div
              className="CSVImporter_ImporterFrame__headerSubtitle"
              css={sx?.ImporterHeaderSubtitleStyles}
              tabIndex={-1}
              ref={subtitleRef}
            >
              {subtitle}
            </div>
          </>
        ) : null}
      </div>

      {children}

      <div
        className="CSVImporter_ImporterFrame__footer"
        css={sx?.ImporterHeaderFooter}
      >
        <div
          className="CSVImporter_ImporterFrame__footerFill"
          css={sx?.ImporterHeaderFooterFill}
        />
        {error ? (
          <div
            className="CSVImporter_ImporterFrame__footerError"
            role="status"
            css={sx?.ImporterHeaderFooterError}
          >
            {error}
          </div>
        ) : null}

        {secondaryLabel ? (
          <div
            className="CSVImporter_ImporterFrame__footerSecondary"
            css={sx?.ImporterHeaderFooterSecondary}
          >
            <TextButton disabled={!!secondaryDisabled} onClick={onSecondary}>
              {secondaryLabel}
            </TextButton>
          </div>
        ) : null}
        <TextButton disabled={!!nextDisabled} onClick={onNext}>
          {nextLabel || nextStepText}
        </TextButton>
      </div>
    </div>
  );
};
