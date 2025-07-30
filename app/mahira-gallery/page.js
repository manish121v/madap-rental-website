"use client";
const mahiraImages = [
  "/Mahira/03858392-c74f-48e2-b90a-d2b8546abb5e.JPG",
  "/Mahira/0411e558-6aca-4bf3-b2f7-9fab8ccf376c.JPG",
  "/Mahira/1c08dff3-8848-409e-b1ea-df96d6f5247b.JPG",
  "/Mahira/1c76a3ed-4279-4595-bf75-133357a4bdc5.JPG",
  "/Mahira/20231125_205912.jpg",
  "/Mahira/20250220_183717.jpg",
  "/Mahira/20250220_183731~2.jpg",
  "/Mahira/20e704cc-65ab-4f02-9f8c-56e7200d308a.JPG",
  "/Mahira/2285b4fc-b732-4ab6-8296-06ba0779b431.JPG",
  "/Mahira/26bd5e9a-079c-43ec-9e00-425f3dc5c1df.JPG",
  "/Mahira/29be1410-0670-49ff-8d1c-65ef2df7a1d8.JPG",
  "/Mahira/2ca4808c-291e-4cd3-86ab-f46bd00b6b19.JPG",
  "/Mahira/4494d5f681cd39fd171e5445ca961fd6.jpg",
  "/Mahira/47885a7b9f5b43c5213f3294b2fd8ce0~2.jpg",
  "/Mahira/49594797-097e-476c-8a2c-38ee1e599b57.JPG",
  "/Mahira/4e9b63ba-797e-4a30-8cd0-6e7376ff5d68.JPG",
  "/Mahira/5c418fa4-74ae-4cbc-ad75-6a5d2f48b013.JPG",
  "/Mahira/5c477fed-5ec8-4519-901d-ca8fd3832987.JPG",
  "/Mahira/6065f027-173f-4f96-abce-b98b4e8ce023.JPG",
  "/Mahira/7572110f315a7241eaedbcd0e077e21a (2)~4.jpg",
  "/Mahira/7676ddd8-cd22-43e0-8cfc-dc6f4ef7e486.JPG",
  "/Mahira/79fcba64-02d9-4984-b51c-a6e58c7887ef.JPG",
  "/Mahira/8e3c4349-6992-49b3-96a0-3c4cd2869acd.JPG",
  "/Mahira/a51a5c40f7b6e834feef20b2de7e98d5~2.jpg",
  "/Mahira/a9f8663ee05cf1d3c78074eec7ab5aea~3.jpg",
  "/Mahira/aa39e189-7e39-437b-b450-5766d17eb039.JPG",
  "/Mahira/b34a1f5d-e289-49de-81d1-d020cc3db91f.JPG",
  "/Mahira/b3872b8a-8e6b-4133-919e-f36aa92f89b5.JPG",
  "/Mahira/b44b23e6-5081-4fdf-ae56-da984544e2f5.JPG",
  "/Mahira/bc5350c7-d43a-407a-9619-f69a30484500.JPG",
  "/Mahira/c5ef9ab2-6475-4cbe-999e-be916283340b.JPG",
  "/Mahira/d63357f8-66fb-44c3-bc5f-e060377c19a7.JPG",
  "/Mahira/d7f0e33d-068d-48a7-811e-d38bf7c3b7bf.JPG",
  "/Mahira/dc06ec27-ed5f-4565-aee6-2a32daedb04a.JPG",
  "/Mahira/de042340-aa36-4b88-b28f-95499e72a3db.JPG",
  "/Mahira/ef44473a-121a-4c89-b80e-0f628241d3af.JPG",
  "/Mahira/f0ebd9ce-1e31-4bc7-ab72-fbc407f3a6ad.JPG",
  "/Mahira/f34c9efa-1157-4ae2-9548-76ba619540dd.JPG",
  "/Mahira/f5ada93c-cb8e-4473-9e7c-cebf4d9972e2.JPG",
  "/Mahira/fa8271f7-e8fd-44fc-a07e-4e0f76292a13.JPG",
  "/Mahira/fce41433-1601-4670-bc0f-9c084c362af9~2.JPG",
  "/Mahira/IMG-20170903-WA0053.jpg",
  "/Mahira/IMG-20240219-WA0009~3.jpg",
  "/Mahira/IMG-20250710-WA0006~3.jpg",
  "/Mahira/Screenshot_20230913_121941_Gallery~2.jpg",
  "/Mahira/Screenshot_20230913_122432_Gallery~2.jpg",
  "/Mahira/Screenshot_20231208_065028_Gallery~2.jpg",
  "/Mahira/Screenshot_20240205_195335_Gallery.jpg",
  "/Mahira/Screenshot_20240205_195453_Gallery~2.jpg",
  "/Mahira/Screenshot_20240306_202606_Gallery~3.jpg",
  "/Mahira/Screenshot_20250129_232539_Gallery~3.jpg",
  "/Mahira/Screenshot_20250529_202816_Gallery~2.jpg",
  "/Mahira/Screenshot_20250608_135721_Gallery~3.jpg",
  "/Mahira/Screenshot_20250608_140721_Gallery~2.jpg",
];

export default function MahiraGallery() {
  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold text-center mb-4">Mahira Gallery</h1>
      <div className="row g-3">
        {mahiraImages.map((src, idx) => (
          <div className="col-6 col-md-3" key={idx}>
            <div
              className="card h-100 shadow-sm border-0"
              style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={src}
                alt={`Mahira ${idx + 1}`}
                loading="lazy"
                className="img-fluid rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}