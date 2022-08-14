import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1> M.M.E Art</h1>
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/contact">Contact </Link>
    </div>
  );
};

export default Header;
