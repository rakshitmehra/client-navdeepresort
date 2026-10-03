'use client';

import { usePathname } from 'next/navigation';
import { whatsappLink } from '@/lib/whatsapp';

export default function WhatsAppFAB() {
  const pathname = usePathname();
  const whatsappUrl = whatsappLink("Hello Navdeep Resort! I'd like to know more about this page.", pathname);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* Official WhatsApp logo SVG */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 4C12.954 4 4 12.954 4 24c0 3.54.924 6.863 2.546 9.74L4 44l10.52-2.508A19.914 19.914 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 7.5C14.835 7.5 7.5 14.835 7.5 24c0 3.163.876 6.12 2.402 8.64L8 40l7.574-1.873A16.45 16.45 0 0 0 24 40.5c9.113 0 16.5-7.387 16.5-16.5S33.113 7.5 24 7.5z"
          fill="#25D366"
        />
        <path
          d="M32.013 27.527c-.44-.22-2.604-1.284-3.007-1.43-.402-.146-.695-.22-.987.22-.292.44-1.133 1.43-1.388 1.723-.256.293-.512.329-.951.11-.44-.22-1.857-.684-3.538-2.183-1.308-1.165-2.191-2.604-2.447-3.044-.256-.44-.027-.677.192-.896.196-.196.44-.512.659-.768.22-.256.293-.44.44-.732.146-.293.073-.55-.037-.769-.11-.22-.987-2.377-1.353-3.254-.354-.854-.717-.739-1.004-.752a18.5 18.5 0 0 0-.859-.016c-.293 0-.769.11-1.172.55-.402.44-1.535 1.5-1.535 3.657 0 2.157 1.572 4.24 1.79 4.534.22.293 3.094 4.725 7.5 6.625 1.048.452 1.866.722 2.504.924 1.052.334 2.011.287 2.769.174.845-.125 2.604-1.065 2.973-2.094.37-1.028.37-1.91.26-2.094-.11-.183-.402-.293-.843-.513z"
          fill="white"
        />
      </svg>
    </a>
  );
}
