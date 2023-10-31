/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

const ProfileDetails = () => {
  const navigate = useRouter();
  return (
    <div className="mt-9 w-full border border-[#24222A]">
      <div className="pt-4">
        <div className=" flex md:flex-row  flex-col items-center md:items-start gap-4  px-4 py-4 w-full">
          <div>
            <img
              className="w-[80px] md:w-[48px]"
              src="/images/profile.png"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between  ">
              <div className="flex flex-col">
                <div className="flex gap-2 ">
                  <h3
                    className="text-[20px] font-bebas-neue cursor-pointer"
                    onClick={(e) => {
                      navigate.push("/");
                    }}
                  >
                    Esther Howard
                  </h3>
                  <span
                    className="text-[14px] cursor-pointer font-satoshi-medium text-neutral-tertiary"
                    onClick={(e) => {
                      navigate.push("/");
                    }}
                  >
                    (@ademoyejohn)
                  </span>
                </div>
                <p className="text-[12px] font-satoshi-regular text-neutral-tertiary">
                  12 April at 09.28 PM
                </p>
              </div>

              <span className="cursor-pointer">
                <svg
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2ZM10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2ZM14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4Z"
                    fill="#9D99AD"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <h3 className="flex flex-col  max-w-[560px] text-center md:text-start text-[16px] font-satoshi-regular leading-[24px] text-neutral-tertiary">
                <span>
                  “Just played Battlefield 2042 and I’m still shaking from the
                  adrenaline rush! The graphics are insane and the gameplay is
                  so immersive. Can’t wait to play again!
                </span>
                <span className="pt-10">
                  <span
                    className="cursor-pointer mr-2"
                    onClick={(e) => {
                      navigate.push("/");
                    }}
                  >
                    #Battlefield2042
                  </span>

                  <span
                    className="cursor-pointer mr-2"
                    onClick={(e) => {
                      navigate.push("/");
                    }}
                  >
                    #gaming
                  </span>

                  <span
                    className="cursor-pointer"
                    onClick={(e) => {
                      navigate.push("/");
                    }}
                  >
                    #FPS
                  </span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-between items-center px-3 py-3 overflow-auto border-b-[0.5px] border-[rgba(228,228,228,0.10)] ">
          <div
            className="flex items-center gap-3  cursor-pointer"
            onClick={(e) => {
              navigate.push("/");
            }}
          >
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66732 11.333L11.334 5.33301C11.8644 5.33301 12.3731 5.54372 12.7482 5.91879C13.1233 6.29387 13.334 6.80257 13.334 7.33301V9.99967H17.1073C17.3006 9.99749 17.492 10.0373 17.6684 10.1165C17.8447 10.1956 18.0017 10.3122 18.1286 10.458C18.2554 10.6039 18.349 10.7756 18.4029 10.9612C18.4568 11.1468 18.4697 11.3419 18.4407 11.533L17.5207 17.533C17.4724 17.8509 17.3109 18.1407 17.0659 18.349C16.8209 18.5573 16.5089 18.67 16.1873 18.6663H8.66732M8.66732 11.333V18.6663M8.66732 11.333H6.66732C6.3137 11.333 5.97456 11.4735 5.72451 11.7235C5.47446 11.9736 5.33398 12.3127 5.33398 12.6663V17.333C5.33398 17.6866 5.47446 18.0258 5.72451 18.2758C5.97456 18.5259 6.3137 18.6663 6.66732 18.6663H8.66732"
                    stroke="#9D99AD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Like
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px] ">
                312
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-3  cursor-pointer"
            onClick={(e) => {
              navigate.push("/");
            }}
          >
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0834 12.6666L13.4167 18.6666C12.8863 18.6666 12.3775 18.4559 12.0025 18.0808C11.6274 17.7057 11.4167 17.197 11.4167 16.6666V13.9999H7.64335C7.45008 14.0021 7.25864 13.9622 7.08231 13.8831C6.90597 13.804 6.74894 13.6874 6.62211 13.5416C6.49529 13.3957 6.40168 13.224 6.34779 13.0384C6.2939 12.8528 6.28102 12.6577 6.31002 12.4666L7.23002 6.46658C7.27824 6.14864 7.43973 5.85884 7.68475 5.65058C7.92977 5.44231 8.2418 5.32961 8.56335 5.33325H16.0834M16.0834 12.6666V5.33325M16.0834 12.6666H17.8634C18.2407 12.6733 18.6073 12.5412 18.8936 12.2954C19.18 12.0496 19.3661 11.7072 19.4167 11.3332V6.66658C19.3661 6.29262 19.18 5.95025 18.8936 5.70446C18.6073 5.45867 18.2407 5.32658 17.8634 5.33325H16.0834"
                    stroke="#9D99AD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Dislike
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                08
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-3  cursor-pointer"
            onClick={(e) => {
              navigate.push("/");
            }}
          >
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0348 4.68133L10.9238 4.67383H10.9223C7.64177 4.67383 5.07227 7.24408 5.07227 10.5253C5.07227 13.5988 7.46177 15.9298 10.671 16.0528V18.9238C10.671 19.0048 10.704 19.1383 10.761 19.2261C10.8675 19.3948 11.049 19.4863 11.235 19.4863C11.3385 19.4863 11.4428 19.4578 11.5365 19.3978C11.7345 19.2718 16.3913 16.2928 17.6025 15.2683C19.029 14.0608 19.8825 12.2908 19.8848 10.5343V10.5216C19.8803 7.24633 17.3123 4.68133 14.0348 4.68058V4.68133ZM16.875 14.4103C16.0245 15.1303 13.2285 16.9641 11.796 17.8926V15.5023C11.796 15.1918 11.5448 14.9398 11.2335 14.9398H10.9365C8.19152 14.9398 6.19802 13.0828 6.19802 10.5253C6.19802 7.87483 8.27402 5.79883 10.923 5.79883L14.0333 5.80633H14.0348C16.6838 5.80633 18.7598 7.88083 18.7613 10.5283C18.759 11.9608 18.0548 13.4113 16.8758 14.4103H16.875Z"
                    fill="#8899A6"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Comments
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                04
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-3  cursor-pointer"
            onClick={(e) => {
              navigate.push("/");
            }}
          >
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9347 18.5323C12.628 18.6691 12.4005 18.7234 12.2535 18.727H12.2504H12.2134C12.0661 18.7169 11.8493 18.6609 11.564 18.5336C11.2614 18.3986 10.9117 18.197 10.5318 17.9331C9.77223 17.4055 8.92165 16.6494 8.12544 15.7437C6.51893 13.9162 5.21289 11.5725 5.21289 9.35847C5.21289 7.30644 6.91201 5.54297 8.76514 5.54297C10.2347 5.54297 11.2593 6.55884 11.8419 7.37981L12.2498 7.9547L12.6575 7.37967C13.2386 6.56016 14.2633 5.54297 15.7334 5.54297C17.588 5.54297 19.2864 7.30639 19.2864 9.35922C19.2864 11.5724 17.9802 13.9158 16.3735 15.7429C15.5772 16.6485 14.7265 17.4045 13.9669 17.932C13.587 18.1959 13.2372 18.3974 12.9347 18.5323Z"
                    stroke="#9D99AD"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Recommended
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                17
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-3  cursor-pointer"
            onClick={(e) => {
              navigate.push("/");
            }}
          >
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66602 12V17.3333C6.66602 17.687 6.80649 18.0261 7.05654 18.2761C7.30659 18.5262 7.64573 18.6667 7.99935 18.6667H15.9993C16.353 18.6667 16.6921 18.5262 16.9422 18.2761C17.1922 18.0261 17.3327 17.687 17.3327 17.3333V12"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6673 7.99967L12.0007 5.33301L9.33398 7.99967"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5.33301V13.9997"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Share
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                09
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row  flex-col items-center md:items-start gap-4  px-4 py-4 w-full pt-6">
        <div>
          <img
            className="w-[80px] md:w-[48px]"
            src="/images/profile.png"
            alt=""
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between  ">
            <div className="flex flex-col">
              <div className="flex gap-2 ">
                <h3 className="text-[20px] font-bebas-neue">Esther Howard</h3>
                <span className="text-[14px] font-satoshi-medium text-neutral-tertiary">
                  (@ademoyejohn)
                </span>
              </div>
              <p className="text-[12px] font-satoshi-regular text-neutral-tertiary">
                12 April at 09.28 PM
              </p>
            </div>

            <span className="cursor-pointer">
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2ZM10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2ZM14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4Z"
                  fill="#9D99AD"
                />
              </svg>
            </span>
          </div>
          <div className="mt-5">
            <img src="/images/profilepage-img-1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-between items-center px-3 py-3 overflow-auto border-b-[0.5px] border-[rgba(228,228,228,0.10)] ">
        <div className="flex items-center gap-3 ">
          <div className="flex items-center gap-1">
            <span className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66732 11.333L11.334 5.33301C11.8644 5.33301 12.3731 5.54372 12.7482 5.91879C13.1233 6.29387 13.334 6.80257 13.334 7.33301V9.99967H17.1073C17.3006 9.99749 17.492 10.0373 17.6684 10.1165C17.8447 10.1956 18.0017 10.3122 18.1286 10.458C18.2554 10.6039 18.349 10.7756 18.4029 10.9612C18.4568 11.1468 18.4697 11.3419 18.4407 11.533L17.5207 17.533C17.4724 17.8509 17.3109 18.1407 17.0659 18.349C16.8209 18.5573 16.5089 18.67 16.1873 18.6663H8.66732M8.66732 11.333V18.6663M8.66732 11.333H6.66732C6.3137 11.333 5.97456 11.4735 5.72451 11.7235C5.47446 11.9736 5.33398 12.3127 5.33398 12.6663V17.333C5.33398 17.6866 5.47446 18.0258 5.72451 18.2758C5.97456 18.5259 6.3137 18.6663 6.66732 18.6663H8.66732"
                  stroke="#9D99AD"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
              Like
            </p>
          </div>
          <div className="pt-1">
            <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px] ">
              312
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="cursor-pointer">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0834 12.6666L13.4167 18.6666C12.8863 18.6666 12.3775 18.4559 12.0025 18.0808C11.6274 17.7057 11.4167 17.197 11.4167 16.6666V13.9999H7.64335C7.45008 14.0021 7.25864 13.9622 7.08231 13.8831C6.90597 13.804 6.74894 13.6874 6.62211 13.5416C6.49529 13.3957 6.40168 13.224 6.34779 13.0384C6.2939 12.8528 6.28102 12.6577 6.31002 12.4666L7.23002 6.46658C7.27824 6.14864 7.43973 5.85884 7.68475 5.65058C7.92977 5.44231 8.2418 5.32961 8.56335 5.33325H16.0834M16.0834 12.6666V5.33325M16.0834 12.6666H17.8634C18.2407 12.6733 18.6073 12.5412 18.8936 12.2954C19.18 12.0496 19.3661 11.7072 19.4167 11.3332V6.66658C19.3661 6.29262 19.18 5.95025 18.8936 5.70446C18.6073 5.45867 18.2407 5.32658 17.8634 5.33325H16.0834"
                  stroke="#9D99AD"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
              Dislike
            </p>
          </div>
          <div className="pt-1">
            <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
              08
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="cursor-pointer">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0348 4.68133L10.9238 4.67383H10.9223C7.64177 4.67383 5.07227 7.24408 5.07227 10.5253C5.07227 13.5988 7.46177 15.9298 10.671 16.0528V18.9238C10.671 19.0048 10.704 19.1383 10.761 19.2261C10.8675 19.3948 11.049 19.4863 11.235 19.4863C11.3385 19.4863 11.4428 19.4578 11.5365 19.3978C11.7345 19.2718 16.3913 16.2928 17.6025 15.2683C19.029 14.0608 19.8825 12.2908 19.8848 10.5343V10.5216C19.8803 7.24633 17.3123 4.68133 14.0348 4.68058V4.68133ZM16.875 14.4103C16.0245 15.1303 13.2285 16.9641 11.796 17.8926V15.5023C11.796 15.1918 11.5448 14.9398 11.2335 14.9398H10.9365C8.19152 14.9398 6.19802 13.0828 6.19802 10.5253C6.19802 7.87483 8.27402 5.79883 10.923 5.79883L14.0333 5.80633H14.0348C16.6838 5.80633 18.7598 7.88083 18.7613 10.5283C18.759 11.9608 18.0548 13.4113 16.8758 14.4103H16.875Z"
                  fill="#8899A6"
                />
              </svg>
            </span>
            <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
              Comments
            </p>
          </div>
          <div className="pt-1">
            <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
              04
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="cursor-pointer">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9347 18.5323C12.628 18.6691 12.4005 18.7234 12.2535 18.727H12.2504H12.2134C12.0661 18.7169 11.8493 18.6609 11.564 18.5336C11.2614 18.3986 10.9117 18.197 10.5318 17.9331C9.77223 17.4055 8.92165 16.6494 8.12544 15.7437C6.51893 13.9162 5.21289 11.5725 5.21289 9.35847C5.21289 7.30644 6.91201 5.54297 8.76514 5.54297C10.2347 5.54297 11.2593 6.55884 11.8419 7.37981L12.2498 7.9547L12.6575 7.37967C13.2386 6.56016 14.2633 5.54297 15.7334 5.54297C17.588 5.54297 19.2864 7.30639 19.2864 9.35922C19.2864 11.5724 17.9802 13.9158 16.3735 15.7429C15.5772 16.6485 14.7265 17.4045 13.9669 17.932C13.587 18.1959 13.2372 18.3974 12.9347 18.5323Z"
                  stroke="#9D99AD"
                />
              </svg>
            </span>
            <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
              Recommended
            </p>
          </div>
          <div className="pt-1">
            <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
              17
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66602 12V17.3333C6.66602 17.687 6.80649 18.0261 7.05654 18.2761C7.30659 18.5262 7.64573 18.6667 7.99935 18.6667H15.9993C16.353 18.6667 16.6921 18.5262 16.9422 18.2761C17.1922 18.0261 17.3327 17.687 17.3327 17.3333V12"
                  stroke="#9D99AD"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6673 7.99967L12.0007 5.33301L9.33398 7.99967"
                  stroke="#9D99AD"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 5.33301V13.9997"
                  stroke="#9D99AD"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
              Share
            </p>
          </div>
          <div className="pt-1">
            <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
              09
            </p>
          </div>
        </div>
      </div>
      <div className="second-profile border-b-[0.5px] border-[rgba(228,228,228,0.10)] pb-3">
        <div className=" flex md:flex-row  flex-col items-center  gap-4 md:items-center px-4 py-4 w-full">
          <div>
            <img
              className="w-[80px] md:w-[48px]"
              src="/images/profilepage-profile-img2.png"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full ">
            <input
              className="bg-[#201F25] cursor-pointer rounded-[24px] py-3 px-3 outline-none w-full placeholder-neutral-tertiary placeholder-[14px] font-satoshi-medium text-neutral-tertiary"
              type="text"
              placeholder="Write a public comment"
            />
          </div>
        </div>
        <div className=" flex md:flex-row  flex-col items-center md:items-start gap-4 px-4  w-full ">
          <div>
            <img
              className="w-[80px] md:w-[48px]"
              src="/images/profilepage-profile-img2.png"
              alt=""
            />
          </div>
          <div className="bg-[#201F25] rounded-[16px] w-full md:w-[434px] px-4 py-3">
            <h3 className="flex justify-between items-center text-[16px]">
              <span className="font-bebas-neue">Mogli</span>
              <span className="font-satoshi-medium">1h ago</span>
            </h3>
            <p className="text-[16px] font-satoshi-regular text-neutral-tertiary leading-[24px] pt-3">
              I love this game.. let's get together and the zombies complete!
              Which map do you like the most?
            </p>
            <div className="flex items-center gap-5 py-3 justify-center md:justify-start ">
              <h3 className=" space-x-2">
                <span className="font-satoshi-medium text-[14px] leading-[16px] tracking-[0.25px] text-neutral-tertiary">
                  Like
                </span>
                <span className="font-bebas-neue text-[12px] leading-[16px] tracking-[0.25px]">
                  312
                </span>
              </h3>
              <h3 className=" space-x-2">
                <span className="font-satoshi-medium text-[14px] leading-[16px] tracking-[0.25px] text-neutral-tertiary">
                  Dislike
                </span>
                <span className="font-bebas-neue text-[12px] leading-[16px] tracking-[0.25px]">
                  312
                </span>
              </h3>
              <h3 className=" space-x-2">
                <span className="font-satoshi-medium text-[14px] leading-[16px] tracking-[0.25px] text-neutral-tertiary">
                  Reply
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start px-5 py-3">
          <a
            className="text-[16px] font-satoshi-medium leading-[24px] hover:text-[#D136F6] transition-all duration-150 ease-in-out"
            href=""
          >
            View more comments{" "}
          </a>
        </div>
      </div>
      <div className="the-division pt-4">
        <div className=" flex md:flex-row  flex-col items-center md:items-start gap-4  px-4 py-4 w-full">
          <div>
            <img
              className="w-[80px] md:w-[48px]"
              src="/images/profile.png"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between  ">
              <div className="flex flex-col">
                <div className="flex gap-2 ">
                  <h3 className="text-[20px] font-bebas-neue">Esther Howard</h3>
                  <span className="text-[14px] font-satoshi-medium text-neutral-tertiary">
                    (@ademoyejohn)
                  </span>
                </div>
                <p className="text-[12px] font-satoshi-regular text-neutral-tertiary">
                  12 April at 09.28 PM
                </p>
              </div>

              <span className="cursor-pointer">
                <svg
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2ZM10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2ZM14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4Z"
                    fill="#9D99AD"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <h3 className="flex flex-col text-center md:text-start max-w-[560px] text-[16px] font-satoshi-regular leading-[24px] text-neutral-tertiary">
                <span>
                  “Just played Battlefield 2042 and I’m still shaking from the
                  adrenaline rush! The graphics are insane and the gameplay is
                  so immersive. Can’t wait to play again!
                </span>
                <span className="pt-10">#Battlefield2042 #gaming #FPS”</span>
              </h3>
              <div className="pt-4">
                <img
                  className=" w-[300px]"
                  src="/images/profilepage-img-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-between items-center px-3 py-3 overflow-auto border-b-[0.5px] border-[rgba(228,228,228,0.10)] ">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66732 11.333L11.334 5.33301C11.8644 5.33301 12.3731 5.54372 12.7482 5.91879C13.1233 6.29387 13.334 6.80257 13.334 7.33301V9.99967H17.1073C17.3006 9.99749 17.492 10.0373 17.6684 10.1165C17.8447 10.1956 18.0017 10.3122 18.1286 10.458C18.2554 10.6039 18.349 10.7756 18.4029 10.9612C18.4568 11.1468 18.4697 11.3419 18.4407 11.533L17.5207 17.533C17.4724 17.8509 17.3109 18.1407 17.0659 18.349C16.8209 18.5573 16.5089 18.67 16.1873 18.6663H8.66732M8.66732 11.333V18.6663M8.66732 11.333H6.66732C6.3137 11.333 5.97456 11.4735 5.72451 11.7235C5.47446 11.9736 5.33398 12.3127 5.33398 12.6663V17.333C5.33398 17.6866 5.47446 18.0258 5.72451 18.2758C5.97456 18.5259 6.3137 18.6663 6.66732 18.6663H8.66732"
                    stroke="#9D99AD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Like
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px] ">
                312
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0834 12.6666L13.4167 18.6666C12.8863 18.6666 12.3775 18.4559 12.0025 18.0808C11.6274 17.7057 11.4167 17.197 11.4167 16.6666V13.9999H7.64335C7.45008 14.0021 7.25864 13.9622 7.08231 13.8831C6.90597 13.804 6.74894 13.6874 6.62211 13.5416C6.49529 13.3957 6.40168 13.224 6.34779 13.0384C6.2939 12.8528 6.28102 12.6577 6.31002 12.4666L7.23002 6.46658C7.27824 6.14864 7.43973 5.85884 7.68475 5.65058C7.92977 5.44231 8.2418 5.32961 8.56335 5.33325H16.0834M16.0834 12.6666V5.33325M16.0834 12.6666H17.8634C18.2407 12.6733 18.6073 12.5412 18.8936 12.2954C19.18 12.0496 19.3661 11.7072 19.4167 11.3332V6.66658C19.3661 6.29262 19.18 5.95025 18.8936 5.70446C18.6073 5.45867 18.2407 5.32658 17.8634 5.33325H16.0834"
                    stroke="#9D99AD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Dislike
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                08
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0348 4.68133L10.9238 4.67383H10.9223C7.64177 4.67383 5.07227 7.24408 5.07227 10.5253C5.07227 13.5988 7.46177 15.9298 10.671 16.0528V18.9238C10.671 19.0048 10.704 19.1383 10.761 19.2261C10.8675 19.3948 11.049 19.4863 11.235 19.4863C11.3385 19.4863 11.4428 19.4578 11.5365 19.3978C11.7345 19.2718 16.3913 16.2928 17.6025 15.2683C19.029 14.0608 19.8825 12.2908 19.8848 10.5343V10.5216C19.8803 7.24633 17.3123 4.68133 14.0348 4.68058V4.68133ZM16.875 14.4103C16.0245 15.1303 13.2285 16.9641 11.796 17.8926V15.5023C11.796 15.1918 11.5448 14.9398 11.2335 14.9398H10.9365C8.19152 14.9398 6.19802 13.0828 6.19802 10.5253C6.19802 7.87483 8.27402 5.79883 10.923 5.79883L14.0333 5.80633H14.0348C16.6838 5.80633 18.7598 7.88083 18.7613 10.5283C18.759 11.9608 18.0548 13.4113 16.8758 14.4103H16.875Z"
                    fill="#8899A6"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Comments
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                04
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9347 18.5323C12.628 18.6691 12.4005 18.7234 12.2535 18.727H12.2504H12.2134C12.0661 18.7169 11.8493 18.6609 11.564 18.5336C11.2614 18.3986 10.9117 18.197 10.5318 17.9331C9.77223 17.4055 8.92165 16.6494 8.12544 15.7437C6.51893 13.9162 5.21289 11.5725 5.21289 9.35847C5.21289 7.30644 6.91201 5.54297 8.76514 5.54297C10.2347 5.54297 11.2593 6.55884 11.8419 7.37981L12.2498 7.9547L12.6575 7.37967C13.2386 6.56016 14.2633 5.54297 15.7334 5.54297C17.588 5.54297 19.2864 7.30639 19.2864 9.35922C19.2864 11.5724 17.9802 13.9158 16.3735 15.7429C15.5772 16.6485 14.7265 17.4045 13.9669 17.932C13.587 18.1959 13.2372 18.3974 12.9347 18.5323Z"
                    stroke="#9D99AD"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Recommended
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                17
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66602 12V17.3333C6.66602 17.687 6.80649 18.0261 7.05654 18.2761C7.30659 18.5262 7.64573 18.6667 7.99935 18.6667H15.9993C16.353 18.6667 16.6921 18.5262 16.9422 18.2761C17.1922 18.0261 17.3327 17.687 17.3327 17.3333V12"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6673 7.99967L12.0007 5.33301L9.33398 7.99967"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5.33301V13.9997"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Share
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                09
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className=" flex md:flex-row  flex-col items-center md:items-start gap-4  px-4 py-4 w-full">
          <div>
            <img
              className="w-[80px] md:w-[48px]"
              src="/images/profile.png"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between  ">
              <div className="flex flex-col">
                <div className="flex gap-2 ">
                  <h3 className="text-[20px] font-bebas-neue">Esther Howard</h3>
                  <span className="text-[14px] font-satoshi-medium text-neutral-tertiary">
                    (@ademoyejohn)
                  </span>
                </div>
                <p className="text-[12px] font-satoshi-regular text-neutral-tertiary">
                  12 April at 09.28 PM
                </p>
              </div>

              <span className="cursor-pointer">
                <svg
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2ZM10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2ZM14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4Z"
                    fill="#9D99AD"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <h3 className="flex flex-col  max-w-[560px] text-center md:text-start text-[16px] font-satoshi-regular leading-[24px] text-neutral-tertiary">
                <span>
                  “Just played Battlefield 2042 and I’m still shaking from the
                  adrenaline rush! The graphics are insane and the gameplay is
                  so immersive. Can’t wait to play again!
                </span>
                <span className="pt-10">#Battlefield2042 #gaming #FPS”</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-between items-center px-3 py-3 overflow-auto border-b-[0.5px] border-[rgba(228,228,228,0.10)] ">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66732 11.333L11.334 5.33301C11.8644 5.33301 12.3731 5.54372 12.7482 5.91879C13.1233 6.29387 13.334 6.80257 13.334 7.33301V9.99967H17.1073C17.3006 9.99749 17.492 10.0373 17.6684 10.1165C17.8447 10.1956 18.0017 10.3122 18.1286 10.458C18.2554 10.6039 18.349 10.7756 18.4029 10.9612C18.4568 11.1468 18.4697 11.3419 18.4407 11.533L17.5207 17.533C17.4724 17.8509 17.3109 18.1407 17.0659 18.349C16.8209 18.5573 16.5089 18.67 16.1873 18.6663H8.66732M8.66732 11.333V18.6663M8.66732 11.333H6.66732C6.3137 11.333 5.97456 11.4735 5.72451 11.7235C5.47446 11.9736 5.33398 12.3127 5.33398 12.6663V17.333C5.33398 17.6866 5.47446 18.0258 5.72451 18.2758C5.97456 18.5259 6.3137 18.6663 6.66732 18.6663H8.66732"
                    stroke="#9D99AD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Like
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px] ">
                312
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0834 12.6666L13.4167 18.6666C12.8863 18.6666 12.3775 18.4559 12.0025 18.0808C11.6274 17.7057 11.4167 17.197 11.4167 16.6666V13.9999H7.64335C7.45008 14.0021 7.25864 13.9622 7.08231 13.8831C6.90597 13.804 6.74894 13.6874 6.62211 13.5416C6.49529 13.3957 6.40168 13.224 6.34779 13.0384C6.2939 12.8528 6.28102 12.6577 6.31002 12.4666L7.23002 6.46658C7.27824 6.14864 7.43973 5.85884 7.68475 5.65058C7.92977 5.44231 8.2418 5.32961 8.56335 5.33325H16.0834M16.0834 12.6666V5.33325M16.0834 12.6666H17.8634C18.2407 12.6733 18.6073 12.5412 18.8936 12.2954C19.18 12.0496 19.3661 11.7072 19.4167 11.3332V6.66658C19.3661 6.29262 19.18 5.95025 18.8936 5.70446C18.6073 5.45867 18.2407 5.32658 17.8634 5.33325H16.0834"
                    stroke="#9D99AD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Dislike
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                08
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0348 4.68133L10.9238 4.67383H10.9223C7.64177 4.67383 5.07227 7.24408 5.07227 10.5253C5.07227 13.5988 7.46177 15.9298 10.671 16.0528V18.9238C10.671 19.0048 10.704 19.1383 10.761 19.2261C10.8675 19.3948 11.049 19.4863 11.235 19.4863C11.3385 19.4863 11.4428 19.4578 11.5365 19.3978C11.7345 19.2718 16.3913 16.2928 17.6025 15.2683C19.029 14.0608 19.8825 12.2908 19.8848 10.5343V10.5216C19.8803 7.24633 17.3123 4.68133 14.0348 4.68058V4.68133ZM16.875 14.4103C16.0245 15.1303 13.2285 16.9641 11.796 17.8926V15.5023C11.796 15.1918 11.5448 14.9398 11.2335 14.9398H10.9365C8.19152 14.9398 6.19802 13.0828 6.19802 10.5253C6.19802 7.87483 8.27402 5.79883 10.923 5.79883L14.0333 5.80633H14.0348C16.6838 5.80633 18.7598 7.88083 18.7613 10.5283C18.759 11.9608 18.0548 13.4113 16.8758 14.4103H16.875Z"
                    fill="#8899A6"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Comments
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                04
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9347 18.5323C12.628 18.6691 12.4005 18.7234 12.2535 18.727H12.2504H12.2134C12.0661 18.7169 11.8493 18.6609 11.564 18.5336C11.2614 18.3986 10.9117 18.197 10.5318 17.9331C9.77223 17.4055 8.92165 16.6494 8.12544 15.7437C6.51893 13.9162 5.21289 11.5725 5.21289 9.35847C5.21289 7.30644 6.91201 5.54297 8.76514 5.54297C10.2347 5.54297 11.2593 6.55884 11.8419 7.37981L12.2498 7.9547L12.6575 7.37967C13.2386 6.56016 14.2633 5.54297 15.7334 5.54297C17.588 5.54297 19.2864 7.30639 19.2864 9.35922C19.2864 11.5724 17.9802 13.9158 16.3735 15.7429C15.5772 16.6485 14.7265 17.4045 13.9669 17.932C13.587 18.1959 13.2372 18.3974 12.9347 18.5323Z"
                    stroke="#9D99AD"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Recommended
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                17
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66602 12V17.3333C6.66602 17.687 6.80649 18.0261 7.05654 18.2761C7.30659 18.5262 7.64573 18.6667 7.99935 18.6667H15.9993C16.353 18.6667 16.6921 18.5262 16.9422 18.2761C17.1922 18.0261 17.3327 17.687 17.3327 17.3333V12"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6673 7.99967L12.0007 5.33301L9.33398 7.99967"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5.33301V13.9997"
                    stroke="#9D99AD"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
                Share
              </p>
            </div>
            <div className="pt-1">
              <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
                09
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
