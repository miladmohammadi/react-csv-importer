import React from 'react';

import './TextButton.scss';

export const TextButton: React.FC<{
  disabled?: boolean;
  onClick?: () => void;
  sx?: any;
}> = ({ disabled, onClick, sx, children }) => {
  return (
    <button
      className="CSVImporter_TextButton"
      css={sx?.TextButtonStyles ?? null}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
