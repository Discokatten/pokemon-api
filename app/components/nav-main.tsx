import Link from "next/link";
import data from "../lib/pages.json";

export default async function NavMain() {
  return (
    // get pages from JSON-file
    <nav>
      <ul className="text-darkgray dark:text-amber-100 flex flex-row justify-center gap-4">
        {data["pages"].map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
