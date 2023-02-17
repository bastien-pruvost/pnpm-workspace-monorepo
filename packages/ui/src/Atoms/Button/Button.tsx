import { PropsWithChildren } from 'react';

import styles from './Button.module.scss';

export type ButtonProps = PropsWithChildren<{}>;

export function Button({ children }: ButtonProps) {
  return (
    <div>
      <button className={styles.Button}>{children}</button>
    </div>
  );
}
