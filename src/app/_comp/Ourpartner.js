"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function Ourpartner() {
  const sliderRef = useRef(null);
  const array = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/ab7f/6fec/143141c276154035c725746d92d3fd6f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcROQawodQHkUCdhvuPzmIFer0pvcfp0iaJVffKFmfSaAEb2vFfzupAjL4Xtuvnh2wbl43J8LtW7i-6sr0H4djpGsfipjGsci6Zfz1vdW4VPdb9Tgw2akCUSAkv~RZQQBKDtfPL-~nMGTmHUYUXk0oeB6wqLu4FwuzrwmZRChyR2EBD~hPfky9HbAleb3RGN6D27i1TwW4ruhwZtEsJAT23cCAaeaoXgduO4neFh1kt5Rrvgcxx4YVmzJ-CMVqerWFyKTsOwQHVgmRRkErg~M3FX34CcAD4cxZAC8THcmpxm-uAMGIllVLRoiW~T5aepOLCjL8elJ8mvA0juAmaCZg__",
      image2:
        "https://s3-alpha-sig.figma.com/img/a98c/2238/013f59cae7273ec97388c726212453f0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CSFHw1~ZbrpaGxcQgBQqXGJO~IHVsJKudcn8J1cnrdmw6xilEqsipa~FNKCcfw5znCujSUY3BlbwNwCpgqHrcKD1d5d0sHRIFwzav0j~0PB-BQhaiEL-4jqIdSof~M1MVRcFKazDzsQM7bDXiqiaZZhiQuHOyVNh6luC1bbWpEZfn2PoXKauAMsMThshFWPXbPdlcJZs-AfvexZHcsiUkrF5AVhtFh7nnnZFcIyklZwSOif7Dchkc8g0GVCQspduSCLC-P6JcrFGkQ0nQ3mUZqfRFCmaZJGfJEX9gD8B-Kdsz8Iol5dV0rUTHEY4LvrSgyoLMnsKdHX4zYbxmao3JQ__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/d12c/eeb8/14cd3ff0629aacfb23a97effae947c1e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZC30HRSfcb~zB8NusG2qRA~EV~ZgUjCcRw1ApeGVOSyFQJCVnMIPZ~GPRlf-K67c~RnmopBTlpiT1ph0krXZsCNxNUJ0TF3dDRGOmqbJV3PKPgHtoVcUnh3HK2dUJhC~j7~KIyhTMmk6h0SLrMzPdTKq7fwMLNjpb09bSl02wK3W8srdzAC-y0MotgAHQIhGMU--L1Jp7IcKaN4dFWkMAyWN7tcOx1lTFUdoTWccjWftUU4GpFZZMVIoOXoHf1QK9UXKBzfK~xcTfLRFqj-pKFXHzQ56yGhhFCIuLURMv85I6XG~p4d7bT-H-GugCoqBbNZ0pLJRSaxOLZL7Krc0OA__",
      image2:
        "https://s3-alpha-sig.figma.com/img/ce71/e4e6/f4dbc475f10538bd3e169acb9e4c56bb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ytw0dsDI6FABzFIRKOQMHLAJZjDx2QgXVBhtBFTADlYJBnTJI8Z7XEdKDoIcSnLZXvDg0TWro~hyavr05g0XsItpO~HuBejUF1tK8k9aypqTeun9onVkhTRfSbD~Tg6X7DP79nXak8giKikBJRf0Q3D2KeztmnTxxFofOYQ2bWJUSxh9rYn4W4~GU8CLEeBKs3~sKwTxGQx6J0hFURwlutwb~tmuUpnRoggzo8yfhc5utYdWrhDb5adQLGB9nLt-kXWUNR6cE4NAMaWf3uDgS9FRjwEwxunjnXBFHhP0n3M3n8Qc7mpQ384ZuqZD8sjfQuVwM7SKAkPoMcK-e~hmzg__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/03fa/a2e3/3f94c67f9bb4fdd9fc93694d4b41d5c9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ifw6T4iSdwa9Kk1BPQOnmu4B9Ikxwtv-CPFjWD1wZnvpX5yh65SZ3iLZXya7nZPOuinyfCs0EfbRdPN-g9Wd283EWolAN8igk1swi-jgB7NpgJhaFEgA6SQEvy4z5GbuOgEE2oQ4gO3koJCh~2rn2yfDTwfkDjE2c8E02t0Nx-Ug4Ea2Nf1My0SZE-YWmgD4hdsMNWZx-6c2KBOzqBCYYJkkWnfqXRPzWdfff1dqLPYQmm~P925stSz3wo6~GKNbSljw72Hawnn6gjRQ5iuhb15AZ9SUXTaiLNs97R16On7fonk53z91JXx4E6p0OGiFZNBKCfFWsYHH1pEYpyrI5A__",
      image2:
        "https://s3-alpha-sig.figma.com/img/ce71/e4e6/f4dbc475f10538bd3e169acb9e4c56bb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ytw0dsDI6FABzFIRKOQMHLAJZjDx2QgXVBhtBFTADlYJBnTJI8Z7XEdKDoIcSnLZXvDg0TWro~hyavr05g0XsItpO~HuBejUF1tK8k9aypqTeun9onVkhTRfSbD~Tg6X7DP79nXak8giKikBJRf0Q3D2KeztmnTxxFofOYQ2bWJUSxh9rYn4W4~GU8CLEeBKs3~sKwTxGQx6J0hFURwlutwb~tmuUpnRoggzo8yfhc5utYdWrhDb5adQLGB9nLt-kXWUNR6cE4NAMaWf3uDgS9FRjwEwxunjnXBFHhP0n3M3n8Qc7mpQ384ZuqZD8sjfQuVwM7SKAkPoMcK-e~hmzg__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/f36b/dcf8/5c3b69639bad734dc0b6dc3f0f5cce1d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VQa~7riYOGj90g-PRwXRvoOwczvohhsJpghff7gTJBBTLUEfCRwwOKrCMu6gDPaZZ0gBTNLcKtwbbgvgR8N59oMT2c9Dxa-PP2r4cnRUfcGJGx1ko9SFIDo0sS5qHpnSLwPk-0eXuo39C0XlfllQ5VbIYwic--a4jmENZ9BgvX4FrDED36MFLbGigkkLQA~1fLPURRUjznPe~p4wmS1y4AvXM9~KTAfBo1S~st6hA2xPdksGqN4ysIgU-BVh4h5MfpZdJiORW~AGCqsLchpNKFp1nKw7MKLGEKGeLHlpY7YgGwYLwyt5aOHE~~2Cjvi042khamuQkDp2wSMV2TArOQ__",
      image2:
        "https://s3-alpha-sig.figma.com/img/2ac0/bba8/36a75b87840a4b1892d06347335a4bac?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaOBFZZXXGovHh8stNRUrvkbC8wsoNXf1613ZtioKq1jmG9CuhM9vCqpoO49Yd9cJ7RhRY1L3WZDW0LKLxDQdX-5SY3XhLDrtCWOxoVrnN1aUjpHk-ohehyQHI9l1B5GrO0uGbuToX40S5BPCNmLazp4OP8SHDqK9gVtuxJ5VA3FVulX6TF7SEeakIZu7OSXJmM35O1NMVorus5HgobFC0nVH2fqYIE7AU5LDJ0xnohmS7GDHU8lbYzACwdptb~NWHLeBUvVidyW09EbzA1BhyEevktHAqS69E1~nHeNUru8Qb~Pn758C2I-g-BMKhtHtilH-xZ1scLKqBg75MxXxA__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/ad5d/9311/5e8e23ab6c717becd2e2698429ddd729?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXSdlytKoUJVI1vlyFjRDHNUmD3hmqAADTbMiYjKSx54e29Gz8t7K4qPvi6SofG-ZEmvFFoThHzfJsuWGkIqfVDOUJB-S3X3k4cfB7AOqK1vFr4b4WW~MSJrcWDtB-K5XZNEfeymH18zj0UILT9G-9zj4tYwfeMXSzDb9~wYU2sxiRQREqaXaVkvft~2HO5-mlb8DvqhkJB32vzCmz~0NcysO3etRkRlw0D4lQG3bGdMBk85uItb~67iaSURj563DVzcX9wVrxMu5Bp8V9mb6IkykU5aHKrK0yAhbv7cumybQMm28UQkTwsJMptdzlINT37bp5W7hrdfbQCBcuXbhA__",
      image2:
        "https://s3-alpha-sig.figma.com/img/144f/83b7/ac5f55ab69cf9dd12170b8ea9fc55c30?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqTVVtpqwQyry2X8w~7NFnt40YMLCrfpxElxrk5zxAER2Wjb8n-Zj4VJmYYJIXIjvckB3VmS0C18pGAZze6d0MR1WqpnoQLSKJ6GIymYx9P1MtVlY2YpYtStQ-8yfPT9xtnp1NG3SKjFBPXa2kZ~vZub2KTjl1ZMxgR8lMianUrAhsNkEyl2i2FQiOIoSdxJOT4ZLLYCZJPPqhpPP8r5IVMWJZUcD0WH8xSEMsDZdz9EIjnfpB0mWm-b0q--awjv6EeWHNWoXCJ-HusTg8dYlpNPTNHGxYmBO1A1tal15~-66qSUic55AM-NfmPUccYfaqIk9cDTFUWh-aDon-d4ng__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/fc1c/6df2/7a2a9c5397a542475bee1139bf0f7bb2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VM-8RxVMpvug-OgLCFfmxFqpnV-Z5sebvkBSEjIKy98ocEF-08SAc3tCOMzjEcoRuTSYfPsqWMd2hBg4fGg7-WDvYTQfaMxsbVu0FVP0838Enp-Cig8bddiwfy6p4u20dT4TsKL0V4x~bpqUOBHcM7Bw8ZVMLdfW7bORYnAC54HGOvY1iAp7fsKfSTpt8LGkkMxo8uhzGO9zmXGxKLYOSFVyB7-hkzPRsx~zFVjdmTduEiMObbwCN2vC32weAMwYUlCrkPXe4YxLIGNsxzVzCV6AwVKkCM-GyHpsaMGXKdHoPxYUsYXdQb0sSc9t41K8eW2YXnhXIVY7wphs05YK-w__",
      image2:
        "https://s3-alpha-sig.figma.com/img/6647/009d/aded9a04c216bdfcbbd4bb22d7e61bc6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGnuML47HOh~zLgievliHqbcUP8w51QPYFeBwBY8-f54qdkaH~S~lycZXsO7n0FkG61mfEpXbWtvn6q3wwtQ9cQxMp3KGUIjgjm9C5DyY2QGQj1KCikxDIICqVVR7xBi9fcXLdwPpqxoJbFS6yZeLD-AVoOQCRGNmLS--lM5uOI-dtEgSNWZ~SCXs8IALQFQkMdSp4nmNwqQv2bqWVbtCsFO96QykAV3mFF21h-w~aRhvyOrStk9Hf8JRk84jZHeLGOPgd~tMtufz4RbnrHzo4L9PWkCXu2Bqej1VDpBIX0dGR3iI8Xf0SvsYMVR4CrG3Bk~C~7L5hUYthNUx4WAVQ__",
    },
  ];

  useEffect(() => {
    const scrollContainer = sliderRef.current;
    if (!scrollContainer) return;
    const scrollInterval = setInterval(() => {
      let error = 0;

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - error - 3
      ) {
        scrollContainer.scrollLeft = 0;
        error = 0;
      } else {
        scrollContainer.scrollLeft += 200;
        error =
          scrollContainer.scrollWidth -
          (scrollContainer.scrollLeft + scrollContainer.clientWidth);
      }
    }, 1500);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="overflow-hidden w-full relative my-14 rounded-lg">
      <div className="absolute w-[500px] min-h-full left-[-450px] md:left-[-360px] bottom-[40px] bg-[rgba(255,255,255,0.94)] blur-[50.15px]" />
      <div class="absolute w-[452px] min-h-full left-[-420px] md:left-[-360px] top-[80px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] blur-[50px]" />

      <div className="absolute w-[500px] min-h-full  right-[-450px] md:right-[-360px] bottom-[40px] bg-[rgba(255,255,255,0.94)] blur-[50.15px]" />

      <div class="absolute w-[452px] min-h-full right-[-450px] md:right-[-360px] top-[80px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] blur-[50px]" />
      <div
        ref={sliderRef}
        className="flex gap-4 max-w-[100vw] overflow-hidden scroll-smooth h-full"
      >
        {array.map((d, i) => {
          return (
            <div
              key={i}
              className="min-w-72 xl:min-w-80 2xl:min-w-96  h-full flex flex-col rounded-lg border-solid border border-[#F0F0F0] overflow-hidden shadow-[7.83px_19.58px_60px_0px_rgba(107,0,9,0.25)]"
            >
              <div key={i} className="flex justify-center bg-white py-3">
                <div className="w-36">
                  <Image alt="banner" src={d.image} width={1000} height={100} />
                </div>
              </div>

              <Image alt="banner" src={d.image2} width={1000} height={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ourpartner;
