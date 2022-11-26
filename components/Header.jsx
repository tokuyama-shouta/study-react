import classes from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <span>Index</span>
      </Link>
      <Link href="/about">
        <span>About</span>
      </Link>
    </header>
  );
}
