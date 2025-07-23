const mheFiles = [
  "/mehendi-haldi-engagement/05296e8f-6f8f-4a3c-a577-ac4a32fbf9f7 2.JPG",
  "/mehendi-haldi-engagement/075bb526-454d-4530-8756-e9475ae53fb5 2.JPG",
  "/mehendi-haldi-engagement/077c0b27-ccff-4383-bd4e-2357ec79f10a.JPG",
  "/mehendi-haldi-engagement/08ea1bc2-e067-4c53-af1a-c486710602ba.JPG",
  "/mehendi-haldi-engagement/14ebf0c8-5e15-4eff-a716-6b49762a8aa8.JPG",
  "/mehendi-haldi-engagement/1564252a-9802-42d6-bef0-17ba89fb6f61.JPG",
  "/mehendi-haldi-engagement/1f29ecc7-7dd0-4d6c-9205-67943cb507d1.JPG",
  "/mehendi-haldi-engagement/20241116_154246~2.jpg",
  "/mehendi-haldi-engagement/212985f0-97c9-4218-936b-35bdb229618d.JPG",
  "/mehendi-haldi-engagement/2ffc40eb-86b4-411a-a2e0-2209261f1382.JPG",
  "/mehendi-haldi-engagement/333b10b8-7552-46d1-b455-a9e5b08d107e.JPG",
  "/mehendi-haldi-engagement/377cb1c1-5130-4f87-aecc-dd15936ecac5.JPG",
  "/mehendi-haldi-engagement/37de1809-8b48-424e-aefe-c860fd503bd9.JPG",
  "/mehendi-haldi-engagement/3fb4e974-b7fc-4181-b46f-b2055692a6a7.JPG",
  "/mehendi-haldi-engagement/40a31667-eede-497e-8f18-690ef5fcd7a3.JPG",
  "/mehendi-haldi-engagement/413e58cd-2300-472e-a3ad-5cb3f356c06e.JPG",
  "/mehendi-haldi-engagement/43ffc146-760d-4ed2-bcb6-02d962fc379f.JPG",
  "/mehendi-haldi-engagement/494e0cce-8ff6-446d-858a-75b902fa2329 2.JPG",
  "/mehendi-haldi-engagement/50e37591-b4be-410b-b5b3-244128ecbce4.JPG",
  "/mehendi-haldi-engagement/58bd3862-c232-458f-b056-e4b10ff772e3.JPG",
  "/mehendi-haldi-engagement/5a60bacf-ab4e-42c5-b41d-33c0b976b4e7.JPG",
  "/mehendi-haldi-engagement/65eaa101-38ff-4766-b05a-28d04522d6a1.JPG",
  "/mehendi-haldi-engagement/65f06dc4-87c5-4c53-a918-c699d62807d4.JPG",
  "/mehendi-haldi-engagement/6aa05308-3cfb-414b-8d7e-aff98535cf37.JPG",
  "/mehendi-haldi-engagement/71b43a87-6998-4a04-aef6-44218f130378.JPG",
  "/mehendi-haldi-engagement/738f4295-13e0-440a-9369-bcc951314e3c~2.JPG",
  "/mehendi-haldi-engagement/7d7ba3eb-a220-4549-bd0f-3ae0f512bb83.JPG",
  "/mehendi-haldi-engagement/7e4a7241-1b87-4c85-b575-8b6ce8dd4753 2.JPG",
  "/mehendi-haldi-engagement/85db2148-1c89-448a-9076-d6b22ca6b107.JPG",
  "/mehendi-haldi-engagement/8e2aa434-14c3-41f9-a9bb-01ed697f95c7.JPG",
  "/mehendi-haldi-engagement/9498a4a0-e339-4688-aa29-edd0a6f08e18.JPG",
  "/mehendi-haldi-engagement/97b51ef4-7a68-4d44-b15b-312564fb0544.JPG",
  "/mehendi-haldi-engagement/9f307b45-7537-4888-ae7a-7fdf58272f7e.JPG",
  "/mehendi-haldi-engagement/9fefa50c-051b-452b-98db-325ac929b54f.JPG",
  "/mehendi-haldi-engagement/a29e084e-7ae5-4cb5-9c43-0688e265531f.JPG",
  "/mehendi-haldi-engagement/ab9ee6e6-2455-49a4-b988-8bd0abb5c224.JPG",
  "/mehendi-haldi-engagement/aeac9c23-ce3c-4919-9e7f-5b278c6c3e20.JPG",
  "/mehendi-haldi-engagement/b6a16a6f-b130-4a01-95ea-e542f68dde8f 2.JPG",
  "/mehendi-haldi-engagement/bb96ec91-4fc6-43bc-b1af-46849e725ea0.JPG",
  "/mehendi-haldi-engagement/bbbde17c-bef1-4b8c-a547-073ca7a5bf91.JPG",
  "/mehendi-haldi-engagement/c13a4378-9d8e-46fb-8d76-379877516da9.JPG",
  "/mehendi-haldi-engagement/c313554f-c4b0-4954-a9bd-0e368d413939.JPG",
  "/mehendi-haldi-engagement/cd4fb4b5-dbc9-4f9d-b6ac-757f2906d8f4 2.JPG",
  "/mehendi-haldi-engagement/d0dd6076-91cb-4f47-830e-9a20e18ed66b.JPG",
  "/mehendi-haldi-engagement/d5a92e24-2c9b-49d4-8e09-fe24f6fab89e.JPG",
  "/mehendi-haldi-engagement/de54f114-1f79-4117-92f1-83a0b554b122.JPG",
  "/mehendi-haldi-engagement/e2bba61e-6dda-4477-b3b2-02dcbd90ff78.JPG",
  "/mehendi-haldi-engagement/e77e9c09-f8c6-4e68-941f-2ec803e5c754.JPG",
  "/mehendi-haldi-engagement/f02ac73f-a636-4e2e-84dc-6af01fcc77b1.JPG",
  "/mehendi-haldi-engagement/f551f228-2a2a-4ed5-9f52-b99e337a1339~2.JPG",
  "/mehendi-haldi-engagement/f5a600e1-5b9e-48b7-b756-666491b30805.JPG",
  "/mehendi-haldi-engagement/IMG-20241119-WA0001~2.jpg",
  "/mehendi-haldi-engagement/IMG-20250531-WA0001.jpg",
  "/mehendi-haldi-engagement/IMG-20250531-WA0009.jpg",
  "/mehendi-haldi-engagement/IMG-20250608-WA0007~2.jpg",
  "/mehendi-haldi-engagement/IMG-20250608-WA0009.jpg",
  "/mehendi-haldi-engagement/IMG-20250608-WA0011.jpg",
  "/mehendi-haldi-engagement/IMG-20250608-WA0035~4.jpg",
  "/mehendi-haldi-engagement/IMG-20250705-WA0012~2.jpg",
  "/mehendi-haldi-engagement/IMG-20250705-WA0029~3.jpg",
  "/mehendi-haldi-engagement/IMG-20250709-WA0009.jpg",
  "/mehendi-haldi-engagement/IMG-20250709-WA0010.jpg",
  "/mehendi-haldi-engagement/IMG-20250709-WA0011.jpg",
  "/mehendi-haldi-engagement/IMG-20250709-WA0012.jpg",
  "/mehendi-haldi-engagement/IMG-20250709-WA0023.jpg",
  "/mehendi-haldi-engagement/IMG-20250709-WA0024.jpg",
  "/mehendi-haldi-engagement/IMG-20250709-WA0025.jpg",
  "/mehendi-haldi-engagement/IMG-20250709-WA0026.jpg",
  "/mehendi-haldi-engagement/Screenshot_20230913_205450_WhatsApp~2.jpg",
  "/mehendi-haldi-engagement/Screenshot_20230913_205456_WhatsApp~2.jpg",
  "/mehendi-haldi-engagement/Screenshot_20230913_205543_WhatsApp~2.jpg",
  "/mehendi-haldi-engagement/Screenshot_20240205_172851_Gallery~3.jpg",
  "/mehendi-haldi-engagement/Screenshot_20240205_172933_Gallery~2.jpg",
  "/mehendi-haldi-engagement/Screenshot_20250529_203040_Gallery~4.jpg",
  "/mehendi-haldi-engagement/Screenshot_20250608_133623_WhatsApp.jpg",
  "/mehendi-haldi-engagement/Screenshot_20250705_112003_WhatsApp~3.jpg",
  "/mehendi-haldi-engagement/VID-20250705-WA0006.mp4",
];

function isVideo(file) {
  return file.match(/\.(mp4|mov|avi|mkv)$/i);
}

export default function MehendiHaldiEngagementGallery() {
  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold text-center mb-4">Mehendi, Haldi & Engagement Gallery</h1>
      <div className="row g-3">
        {mheFiles.map((src, idx) => (
          <div className="col-12 col-md-4 col-lg-3" key={idx}>
            <div className="card h-100 shadow-sm border-0">
              {isVideo(src) ? (
                <video controls width="100%" style={{ borderRadius: '0.5rem' }}>
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={src} alt={`Mehendi, Haldi & Engagement ${idx + 1}`} className="img-fluid rounded" style={{ cursor: 'pointer' }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 