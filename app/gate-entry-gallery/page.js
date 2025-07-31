"use client";

const gateEntryFiles = [
  "/Gate-Entry/00748a94-9ca2-41d4-800b-cb971f6dfb58.JPG",
  "/Gate-Entry/02db89db-85d6-4346-82fa-424cda80f7c3.JPG",
  "/Gate-Entry/02eb0e80-c09c-4017-b2e1-0cb965b32a0f.JPG",
  "/Gate-Entry/06066d05-fe1a-4d82-9973-d9e0e72fcab6.JPG",
  "/Gate-Entry/06066d05-fe1a-4d82-9973-d9e0e72fcab6~2.JPG",
  "/Gate-Entry/0939d7f5-1b48-4658-b386-fd99569ac518.JPG",
  "/Gate-Entry/0a1390bc-e01c-4ace-8241-3c07604eaeef.JPG",
  "/Gate-Entry/0b1519ea-939c-45e5-aa38-213e65f7418a.JPG",
  "/Gate-Entry/0dd4800b-4ee7-465c-a11e-6826cde28432.JPG",
  "/Gate-Entry/105e65d8-7de4-4816-a554-4afc9ae00cc4.JPG",
  "/Gate-Entry/12fda457-5cdc-46b0-a61b-5a4594480711 2.JPG",
  "/Gate-Entry/13faa245-435c-4ea3-831c-0a98431ee90f.JPG",
  "/Gate-Entry/171a5572-e4e7-40b3-8048-06de3bffab58.JPG",
  "/Gate-Entry/175157c3-024c-4332-b883-5d635197403b.JPG",
  "/Gate-Entry/1778d553-3860-4f84-8975-e9e53fd8b9d2.JPG",
  "/Gate-Entry/17f55085-c5b5-44a9-8372-9acb6551ec7f.JPG",
  "/Gate-Entry/186281a2-497a-47d8-a050-757fc8e02dd5.JPG",
  "/Gate-Entry/19a960db-478f-42ab-8bfe-1da427296cb4.JPG",
  "/Gate-Entry/1b675ac5-1857-4d3f-a462-1de96a74fd90.JPG",
  "/Gate-Entry/1c5975c1-9878-47b3-b24f-4ac6fbbf2678.JPG",
  "/Gate-Entry/20241117_111226.jpg",
  "/Gate-Entry/20241117_112213.jpg",
  "/Gate-Entry/20241202_184021~4.jpg",
  "/Gate-Entry/20241202_184046~2.jpg",
  "/Gate-Entry/20250118_201534.jpg",
  "/Gate-Entry/20250120_181438~3.jpg",
  "/Gate-Entry/20250220_182952.mp4",
  "/Gate-Entry/20250221_111003.mp4",
  "/Gate-Entry/230fb632-33f5-4c30-b987-a73fb4e48ea9.JPG",
  "/Gate-Entry/2390254a-1b1b-49cb-9894-197d6392a873.JPG",
  "/Gate-Entry/2914393e-fc6b-47b9-8d48-557f5b8ae76f.JPG",
  "/Gate-Entry/2a41bbb6-317e-43e2-9dab-b703e2f44ee7.JPG",
  "/Gate-Entry/2a5110eb-e8d5-4f6d-be8f-294ffa28afc9.JPG",
  "/Gate-Entry/2b6a67d7-061b-4e17-81eb-06bfc0a88707.JPG",
  "/Gate-Entry/2c9c9b2c-95f6-43a6-8d48-7ec8a0786371.JPG",
  "/Gate-Entry/2cb9e6df-40ae-4dbd-b543-96e751733871.JPG",
  "/Gate-Entry/2e64a9c8-0bed-4fed-9678-bfe48191b261.JPG",
  "/Gate-Entry/2f3febd2-0e54-453c-a6f8-09f484d1e7ec.JPG",
  "/Gate-Entry/3004d328-852e-49df-94b7-2b4330d6c270.JPG",
  "/Gate-Entry/312b5f50-67a7-4e2a-a360-16ae991752bc.JPG",
  "/Gate-Entry/340ecd77-afdd-4a8b-b287-1c25c97b7a73 2.JPG",
  "/Gate-Entry/39151940-2073-4641-9ed0-92f44a522ad3 2.JPG",
  "/Gate-Entry/3b21c23b-1f9d-4804-8b8c-aae86cae0bd7.JPG",
  "/Gate-Entry/3c26e19f-a2f8-44e8-b073-729cbee1231f.JPG",
  "/Gate-Entry/3ea4b5b8-efe1-41ff-abd7-53e54466e169.JPG",
  "/Gate-Entry/3eb27496-cbf3-4c42-a3b8-b098f87a1d98.JPG",
  "/Gate-Entry/3f5ea6c8-4245-4ce1-90e7-f3f3f4b95bc4.JPG",
  "/Gate-Entry/4160494d-893a-4626-b8bb-6fdd48181cc0.JPG",
  "/Gate-Entry/418ec5ca-b1ba-420e-9204-a17b74bda4d5.JPG",
  "/Gate-Entry/444a20fc-58d1-4b33-af6d-86f348edb92e~2.JPG",
  "/Gate-Entry/451b1cc9-0384-4b41-8db4-00705e6246d9.JPG",
  "/Gate-Entry/45703d00-2d96-4c55-9030-bbd331c8f1ed.JPG",
  "/Gate-Entry/460abf44-da38-450f-9fb3-0531ccf435c2.JPG",
  "/Gate-Entry/47b7beed-6977-49e2-a862-569a4206bf61.JPG",
  "/Gate-Entry/4820d329-7fd3-4ba1-9b69-1ede708a80ee.JPG",
  "/Gate-Entry/48335428-1b00-4ef3-8776-1532247a2188.JPG",
  "/Gate-Entry/48335428-1b00-4ef3-8776-1532247a2188~2.JPG",
  "/Gate-Entry/496b2cdd-25de-4fab-aaeb-a39f2af1f132.JPG",
  "/Gate-Entry/4a701d9b-c084-4bc6-9d61-b3957d4bd1a8.JPG",
  "/Gate-Entry/4bd231ef-8158-4331-99a9-d78ed6d19523.JPG",
  "/Gate-Entry/4ea71675-a628-4691-9028-4dd3673801fa.JPG",
  "/Gate-Entry/53699574-07f6-4ec5-87d8-8503191ae026.JPG",
  "/Gate-Entry/5437eafb-d73c-44ae-bda7-1fe31985ec70.JPG",
  "/Gate-Entry/554d003a-411f-480d-8687-9272ad106ed6.JPG",
  "/Gate-Entry/55c52724-9db1-4b4d-bfd7-b488a0ed04d1.JPG",
  "/Gate-Entry/586e36c4-b7b6-41f4-a6ae-f9d960c3f1aa.JPG",
  "/Gate-Entry/5a81988c-247d-44a7-9a33-7706eaf1c302.JPG",
  "/Gate-Entry/5a974af3-4b4b-4652-8831-3fc1ac55fcd6.JPG",
  "/Gate-Entry/5ba0825e-afcd-4d45-bd5d-62b2904d40f1.JPG",
  "/Gate-Entry/5db876bb-2f95-4dfe-a003-db63bf37d6af.JPG",
  "/Gate-Entry/60a0b387-b598-4093-b802-d9f48ba57881.JPG",
  "/Gate-Entry/60ffbae9-113e-442b-aed4-37b405cd6b67.JPG",
  "/Gate-Entry/61059065-e1ea-4927-a188-8b73ee8a371d.JPG",
  "/Gate-Entry/61676048-2859-49f1-8a11-da81eef89402.JPG",
  "/Gate-Entry/68e98cd5-b295-4b8d-b492-a2233244b307.JPG",
  "/Gate-Entry/6aab765a-5bbb-4971-b82e-94ebec77e058.JPG",
  "/Gate-Entry/71567aa7-beab-47d9-b24f-67e2741202e5.JPG",
  "/Gate-Entry/7522c3d1-ab67-47ae-86c2-ba9f28b8d0e2.JPG",
  "/Gate-Entry/7522c3d1-ab67-47ae-86c2-ba9f28b8d0e2~2.JPG",
  "/Gate-Entry/76128eb1-5da2-4acf-af47-b5b93152515a.JPG",
  "/Gate-Entry/77bd132f-f247-4218-8d75-747d742ed7ed.JPG",
  "/Gate-Entry/7e072366-a048-44ee-a29d-f9967295148b~2.JPG",
  "/Gate-Entry/7eec20e2-cd50-4575-9a0c-10c6b16d5c54.JPG",
  "/Gate-Entry/7fe89348-5d05-4e11-aa20-08a6a773ad8a.JPG",
  "/Gate-Entry/8040c2a4-745b-48ce-b5a3-9acf265178e3.JPG",
  "/Gate-Entry/80f56b32-f77b-471a-b8ab-8b90180c0c71.JPG",
  "/Gate-Entry/845d42d3-41ae-4654-828a-ac32d306713d.JPG",
  "/Gate-Entry/864f5554-6076-44a8-9f01-92d3b7f872fe.JPG",
  "/Gate-Entry/8658920d-5531-4f54-a1d3-180612edf92f.JPG",
  "/Gate-Entry/8981a571-363d-46fb-8827-5e19eefe2dfb.MP4",
  "/Gate-Entry/8d0b36f0-3c87-4b55-b2b8-90ad48cd3aae.JPG",
  "/Gate-Entry/8d6a3344-45f8-4a74-855f-26f0c64fbd9d.JPG",
  "/Gate-Entry/8f7549b0-ca3d-4610-a60b-9d2dea9821ec.JPG",
  "/Gate-Entry/8fb6e05f-cf16-46f9-85aa-51efd6fadfea.JPG",
  "/Gate-Entry/902a7dc8-0ceb-4d1e-9e5a-6e4de1ec6bd6.JPG",
  "/Gate-Entry/90d92025-7595-47f2-a2aa-5f21d1b28d60.JPG",
  "/Gate-Entry/9b1d3da8-503a-49bf-8b6b-da64e852f034.JPG",
  "/Gate-Entry/9cedd7e9-633e-4ff2-bb01-2234616fce1d 2.JPG",
  "/Gate-Entry/9e5b911a-a748-4cd6-81ca-dc12adb9aaf3.JPG",
  "/Gate-Entry/9ed3b73d-fa1a-4237-88b5-d76434875cb9.JPG",
  "/Gate-Entry/a1bbd261-7fc9-4250-a16f-325efb4b3f8a.JPG",
  "/Gate-Entry/a22b6dba-0faa-4dd0-b580-e4f2bd23b787.JPG",
  "/Gate-Entry/a34c2f21-dedf-472e-8ca6-3e7f10025f48.JPG",
  "/Gate-Entry/a3a49ec3-1203-4bd0-afa3-684953a91a20.JPG",
  "/Gate-Entry/a3ca526e-b755-4d52-a948-2af7cbaab6d2.JPG",
  "/Gate-Entry/a40ed8b7-134e-495c-8dd1-51c116dc064a.JPG",
  "/Gate-Entry/a56e2763-b311-44dc-81d0-ad3f03d77c56.JPG",
  "/Gate-Entry/a726decf-197e-4f19-866c-7d0ec7d7a401.JPG",
  "/Gate-Entry/a91af18b-f05a-44e5-b01a-d52a13ed0ee2.JPG",
  "/Gate-Entry/b0d22ef9-75ed-4bed-978f-f98e87a19b70.JPG",
  "/Gate-Entry/b32dfe4d-edaa-4940-a85d-b2cc730af134.JPG",
  "/Gate-Entry/b3457442-d76b-4989-9e8a-40128f4c076f.JPG",
  "/Gate-Entry/b41381fc-a076-40c5-96c3-fb43ee815e98.JPG",
  "/Gate-Entry/b7044ef1-70e7-4052-964d-85660675c9bc~2.JPG",
  "/Gate-Entry/ba5686d9-e78d-4566-a003-04831ec83130.JPG",
  "/Gate-Entry/bca17bef-b3fa-46af-a4b1-279f0920d94f.JPG",
  "/Gate-Entry/bcd6208e-1996-4b51-a53a-64f10dee5a52.JPG",
  "/Gate-Entry/bd4b0379-d7c5-4111-88d4-cc2d0e2884aa.JPG",
  "/Gate-Entry/bf3c5595-1628-46ee-9ac5-3c946ff2cfb2.JPG",
  "/Gate-Entry/c06d5010-5e21-4757-bb50-079249eaf64c.JPG",
  "/Gate-Entry/c0d414d9-d72a-4de1-b7fa-ed440cb65bad.JPG",
  "/Gate-Entry/c54ceb8a-3ab1-43fc-99cb-8d3fec7ad138.JPG",
  "/Gate-Entry/c98d222e-2214-4440-89ca-c09fa7b569d6.JPG",
  "/Gate-Entry/cb9e90c6-c0a6-4a46-806f-f124334419fa.JPG",
  "/Gate-Entry/cc07aedb-41e3-475d-9532-dfe33fbcb75d.JPG",
  "/Gate-Entry/ce2b36bc-5ccb-4830-832d-b45575a6386b.JPG",
  "/Gate-Entry/ce2d9f12-b7dd-40d8-9439-bfb08e8a1621.JPG",
  "/Gate-Entry/cf614496-f21f-407a-be3e-4e3f991847a9.JPG",
  "/Gate-Entry/d0da31cf-46a7-4b31-aaac-32c2e41a7ee7.JPG",
  "/Gate-Entry/d483d602-4208-4cc1-a37d-987314874d61.JPG",
  "/Gate-Entry/d51d6619-2d3e-46e8-b5a5-31249bfef35a.JPG",
  "/Gate-Entry/d794247a-a38e-4df1-a2b4-4d37353b24b8.JPG",
  "/Gate-Entry/d7a6ae95-324f-4aa1-b1a8-07aad14e8b21.JPG",
  "/Gate-Entry/d9c4b852-716f-42f9-893b-52c1a9ee2e7b.JPG",
  "/Gate-Entry/dac9dcac-f46f-4f65-aa43-41b59b07fec4.JPG",
  "/Gate-Entry/e16b4cd4-897d-4a71-89eb-0f03fa27fbf6.JPG",
  "/Gate-Entry/e231ece4-baba-4b1a-add2-6480c1360c06.JPG",
  "/Gate-Entry/e235834b-f5d8-4131-aece-8fdf88ff7fc8.JPG",
  "/Gate-Entry/e32ff6af-7b41-4cb7-8027-e619ed72cc41.JPG",
  "/Gate-Entry/e3319ed0-7ac6-4893-9636-a58bf015d311~2.JPG",
  "/Gate-Entry/e53620bd-f291-4771-855d-af0d42dacc26.JPG",
  "/Gate-Entry/e8e5fd93-dcbb-44d9-b7e4-a70bd27ff7d1.JPG",
  "/Gate-Entry/eb304936-d077-4135-98ec-5c3048de6bd8.JPG",
  "/Gate-Entry/edb7fb15-16e2-40da-ad99-16a487b926a5.JPG",
  "/Gate-Entry/ededf4ef-8472-4f57-8be0-a994dc1ad460.JPG",
  "/Gate-Entry/edf0d29f-b7a3-4a67-b01d-191630dac68d.JPG",
  "/Gate-Entry/efbac80d-7cb6-4d81-bbca-d23e855e936b.JPG",
  "/Gate-Entry/f0ab5813-23d4-4e3e-b276-463ab1e8c734 2.JPG",
  "/Gate-Entry/f109b15b-3284-4454-bd43-d188049868ac.JPG",
  "/Gate-Entry/f3094804-3da8-4e0a-a5b7-d5429ee4725b.JPG",
  "/Gate-Entry/f63954a7-fa4d-45e7-8385-944a25d27c41.JPG",
  "/Gate-Entry/f70bbaef-c816-49bb-8f41-9dbcb1517de9.JPG",
  "/Gate-Entry/f8809038-1010-4f07-9bec-bce6d947db13.JPG",
  "/Gate-Entry/f9605e1f-8937-4cd0-81d0-68e0267cab0c.JPG",
  "/Gate-Entry/fa13a4b5-c2d5-4dc1-8998-00b4574a7a0c.JPG",
  "/Gate-Entry/fa873252-9d11-43be-8efd-022458766d00.JPG",
  "/Gate-Entry/fabfdc95-6723-4664-a365-562d7f7169ef.JPG",
  "/Gate-Entry/fd345e61-eb2a-411b-808d-8759b91d24a6.JPG",
  "/Gate-Entry/Image_1749486802353.jpg",
  "/Gate-Entry/IMG-20211114-WA0001.jpg",
  "/Gate-Entry/IMG-20230203-WA0005.jpg",
  "/Gate-Entry/IMG-20230713-WA0008.jpg",
  "/Gate-Entry/IMG-20230713-WA0011.jpg",
  "/Gate-Entry/IMG-20230713-WA0012.jpg",
  "/Gate-Entry/IMG-20241118-WA0006.jpg",
  "/Gate-Entry/IMG-20241201-WA0008~3.jpg",
  "/Gate-Entry/IMG-20241213-WA0003~2.jpg",
  "/Gate-Entry/IMG-20250126-WA0000~3.jpg",
  "/Gate-Entry/IMG-20250219-WA0001.jpg",
  "/Gate-Entry/IMG-20250219-WA0003.jpg",
  "/Gate-Entry/IMG-20250219-WA0011~2.jpg",
  "/Gate-Entry/IMG-20250529-WA0009.jpg",
  "/Gate-Entry/IMG-20250608-WA0027.jpg",
  "/Gate-Entry/IMG-20250608-WA0029.jpg",
  "/Gate-Entry/IMG-20250608-WA0031.jpg",
  "/Gate-Entry/IMG-20250608-WA0033~2.jpg",
  "/Gate-Entry/IMG-20250608-WA0047.jpg",
  "/Gate-Entry/IMG-20250608-WA0049~2.jpg",
  "/Gate-Entry/Screenshot_20240205_194433_Gallery~3.jpg",
  "/Gate-Entry/Screenshot_20240205_195258_Gallery~2.jpg",
  "/Gate-Entry/Screenshot_20240205_195506_Gallery~3.jpg",
  "/Gate-Entry/Screenshot_20240219_202829_WhatsApp~2.jpg",
  "/Gate-Entry/Screenshot_20240917_171020_WhatsApp~3.jpg",
  "/Gate-Entry/Screenshot_20240917_171030_WhatsApp~3.jpg",
  "/Gate-Entry/Screenshot_20240917_171037_WhatsApp~3.jpg",
  "/Gate-Entry/Screenshot_20240917_171044_WhatsApp~2.jpg",
  "/Gate-Entry/Screenshot_20250130_065933_Photos~3.jpg",
  "/Gate-Entry/Screenshot_20250608_140119_Gallery~3.jpg",
  "/Gate-Entry/Screenshot_20250608_140849_Gallery~3.jpg",
  "/Gate-Entry/Screenshot_20250608_141329_Gallery~2.jpg",
  "/Gate-Entry/Screenshot_20250704_135321_WhatsApp~2.jpg",
  "/Gate-Entry/VID-20240125-WA0010.mp4",
  "/Gate-Entry/VID-20240205-WA0005.mp4",
  "/Gate-Entry/VID-20240205-WA0007.mp4",
  "/Gate-Entry/VID-20240828-WA0035.mp4",
  "/Gate-Entry/VID-20241217-WA0013.mp4",
  "/Gate-Entry/VID-20241217-WA0016.mp4",
];

function isVideo(file) {
    return /\.(mp4|mov|avi|mkv)$/i.test(file);
  }
  
  export default function GateEntryGallery() {
    return (
      <div className="container py-5">
        <h1 className="display-5 fw-bold text-center mb-4">Gate & Entry Gallery</h1>
        <div className="row g-3">
          {gateEntryFiles.map((src, idx) => (
            <div className="col-12 col-md-4 col-lg-3" key={idx}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ transition: "transform 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {isVideo(src) ? (
                  <video
                    controls
                    width="100%"
                    controlsList="nodownload"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    <source
                      src={src}
                      type={`video/${src.split(".").pop().toLowerCase()}`}
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={src}
                    loading="lazy"
                    alt={`Gate-Entry image ${idx + 1}`}
                    className="img-fluid rounded"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  