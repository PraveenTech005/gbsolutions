import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    const baseTitle = "G.B SOLUTION PEB | Industrial Shed & Civil Contractors";
    document.title = title ? `${title} | G.B SOLUTION PEB` : baseTitle;

    const defaultDesc = "Engineering the future of industrial spaces. Turnkey Pre-Engineered Buildings, Structural Steel Fabrication, and Civil Construction Services in Hyderabad, India.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || defaultDesc);
    }
  }, [title, description]);

  return null;
}
