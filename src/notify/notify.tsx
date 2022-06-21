import React, { PropsWithChildren } from 'react';

import { Icon, AvailableIcons } from './icons';

import './notify.scss';

export interface INotify {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  icon: AvailableIcons;
  className?: string;
}

export default function CTSNotify({
  type,
  message,
  icon,
  className
}: PropsWithChildren<INotify>) {
  const IconElement = Icon[icon];

  return (
    <div className={`cts-notify ${type} ${className}`}>
      {icon && (
        <div className="icon">
          <IconElement />
        </div>
      )}
      <p className="message">{message}</p>
    </div>
  );
}
