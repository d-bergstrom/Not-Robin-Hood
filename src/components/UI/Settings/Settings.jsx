import React from "react";
// import CameraIcon from "../../../assets/icons/camera-icon.svg";
// import SquareIcon from "../../../assets/icons/square-icon.svg";
// import SettingIcon from "../../../assets/icons/settings-icon.svg";
import Button from "../Button/Button";

const Settings = () => {
  return (
    <>
      <Button type="settings">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="#37433A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M33.25 12.25H28V9.625C28 8.46468 27.5391 7.35188 26.7186 6.53141C25.8981 5.71093 24.7853 5.25 23.625 5.25H18.375C17.2147 5.25 16.1019 5.71093 15.2814 6.53141C14.4609 7.35188 14 8.46468 14 9.625V12.25H8.75C7.35761 12.25 6.02226 12.8031 5.03769 13.7877C4.05312 14.7723 3.5 16.1076 3.5 17.5V31.5C3.5 32.8924 4.05312 34.2277 5.03769 35.2123C6.02226 36.1969 7.35761 36.75 8.75 36.75H33.25C34.6424 36.75 35.9777 36.1969 36.9623 35.2123C37.9469 34.2277 38.5 32.8924 38.5 31.5V17.5C38.5 16.1076 37.9469 14.7723 36.9623 13.7877C35.9777 12.8031 34.6424 12.25 33.25 12.25ZM17.5 9.625C17.5 9.39293 17.5922 9.17037 17.7563 9.00628C17.9204 8.84219 18.1429 8.75 18.375 8.75H23.625C23.8571 8.75 24.0796 8.84219 24.2437 9.00628C24.4078 9.17037 24.5 9.39293 24.5 9.625V12.25H17.5V9.625ZM35 31.5C35 31.9641 34.8156 32.4092 34.4874 32.7374C34.1593 33.0656 33.7141 33.25 33.25 33.25H8.75C8.28587 33.25 7.84075 33.0656 7.51256 32.7374C7.18438 32.4092 7 31.9641 7 31.5V17.5C7 17.0359 7.18438 16.5907 7.51256 16.2626C7.84075 15.9344 8.28587 15.75 8.75 15.75H33.25C33.7141 15.75 34.1593 15.9344 34.4874 16.2626C34.8156 16.5907 35 17.0359 35 17.5V31.5Z" />
          <path d="M21 18.375C19.7886 18.375 18.6044 18.7342 17.5971 19.4072C16.5899 20.0803 15.8048 21.0369 15.3412 22.1561C14.8777 23.2753 14.7564 24.5068 14.9927 25.6949C15.229 26.8831 15.8124 27.9744 16.669 28.831C17.5256 29.6876 18.6169 30.271 19.8051 30.5073C20.9932 30.7436 22.2247 30.6223 23.3439 30.1588C24.4631 29.6952 25.4197 28.9101 26.0928 27.9029C26.7658 26.8956 27.125 25.7114 27.125 24.5C27.125 22.8755 26.4797 21.3176 25.331 20.169C24.1824 19.0203 22.6245 18.375 21 18.375ZM21 27.125C20.4808 27.125 19.9733 26.971 19.5416 26.6826C19.11 26.3942 18.7735 25.9842 18.5748 25.5045C18.3761 25.0249 18.3242 24.4971 18.4254 23.9879C18.5267 23.4787 18.7767 23.011 19.1438 22.6438C19.511 22.2767 19.9787 22.0267 20.4879 21.9254C20.9971 21.8242 21.5249 21.8761 22.0045 22.0748C22.4842 22.2735 22.8942 22.6099 23.1826 23.0416C23.4711 23.4733 23.625 23.9808 23.625 24.5C23.625 25.1962 23.3484 25.8639 22.8562 26.3562C22.3639 26.8484 21.6962 27.125 21 27.125Z" />
        </svg>
      </Button>

      <Button type="settings">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="#37433A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.692 36H16.29C15.488 36 14.7188 35.6814 14.1517 35.1143C13.5846 34.5472 13.266 33.778 13.266 32.976V31.014C13.2563 30.8984 13.2139 30.788 13.1437 30.6955C13.0736 30.6031 12.9787 30.5325 12.87 30.492C12.7599 30.4214 12.6318 30.3839 12.501 30.3839C12.3702 30.3839 12.2421 30.4214 12.132 30.492L10.8 31.932C10.5206 32.2134 10.1883 32.4367 9.82221 32.5891C9.45613 32.7414 9.06353 32.8199 8.667 32.8199C8.27047 32.8199 7.87786 32.7414 7.51179 32.5891C7.14571 32.4367 6.8134 32.2134 6.534 31.932L4.068 29.52C3.78255 29.2411 3.55585 28.9079 3.40128 28.5401C3.2467 28.1722 3.16738 27.777 3.168 27.378C3.16916 26.5617 3.49262 25.779 4.068 25.2L5.4 23.868C5.46431 23.7688 5.49853 23.6532 5.49853 23.535C5.49853 23.4168 5.46431 23.3012 5.4 23.202C5.292 22.932 5.112 22.734 4.86 22.734H3.024C2.22033 22.7292 1.45121 22.4066 0.884608 21.8367C0.31801 21.2667 -1.40692e-05 20.4957 4.6682e-10 19.692V16.29C4.6682e-10 15.488 0.318599 14.7188 0.885709 14.1517C1.45282 13.5846 2.22199 13.266 3.024 13.266H4.986C5.10159 13.2563 5.21204 13.2139 5.30446 13.1437C5.39688 13.0736 5.46747 12.9787 5.508 12.87C5.57856 12.7599 5.61607 12.6318 5.61607 12.501C5.61607 12.3702 5.57856 12.2421 5.508 12.132L4.068 10.8C3.78663 10.5206 3.56332 10.1883 3.41094 9.82221C3.25855 9.45613 3.1801 9.06353 3.1801 8.667C3.1801 8.27047 3.25855 7.87786 3.41094 7.51179C3.56332 7.14571 3.78663 6.8134 4.068 6.534L6.48 4.068C6.75612 3.78391 7.08628 3.55793 7.45105 3.40336C7.81582 3.2488 8.20783 3.16877 8.604 3.168C9.01124 3.16621 9.41483 3.24479 9.79166 3.39922C10.1685 3.55366 10.5111 3.78093 10.8 4.068L12.132 5.4C12.2312 5.46431 12.3468 5.49853 12.465 5.49853C12.5832 5.49853 12.6988 5.46431 12.798 5.4C13.068 5.292 13.266 5.112 13.266 4.86V3.024C13.2708 2.22033 13.5933 1.45121 14.1633 0.884608C14.7333 0.31801 15.5043 -1.40692e-05 16.308 4.6682e-10H19.8C20.602 4.66819e-10 21.3712 0.318599 21.9383 0.885709C22.5054 1.45282 22.824 2.22199 22.824 3.024V4.986C22.8337 5.10159 22.8761 5.21204 22.9463 5.30446C23.0164 5.39688 23.1113 5.46747 23.22 5.508C23.3301 5.57856 23.4582 5.61607 23.589 5.61607C23.7198 5.61607 23.8479 5.57856 23.958 5.508L25.2 4.068C25.4794 3.78663 25.8117 3.56332 26.1778 3.41094C26.5439 3.25855 26.9365 3.1801 27.333 3.1801C27.7295 3.1801 28.1221 3.25855 28.4882 3.41094C28.8543 3.56332 29.1866 3.78663 29.466 4.068L31.932 6.48C32.2166 6.75946 32.4428 7.09278 32.5973 7.46053C32.7518 7.82828 32.8316 8.22311 32.832 8.622C32.8407 9.02753 32.7652 9.43045 32.6103 9.80533C32.4554 10.1802 32.2244 10.5189 31.932 10.8L30.6 12.132C30.5357 12.2312 30.5015 12.3468 30.5015 12.465C30.5015 12.5832 30.5357 12.6988 30.6 12.798C30.708 13.068 30.888 13.266 31.14 13.266H33.102C33.8836 13.303 34.6208 13.6398 35.1605 14.2063C35.7002 14.7729 36.0009 15.5256 36 16.308V19.8C36 20.602 35.6814 21.3712 35.1143 21.9383C34.5472 22.5054 33.778 22.824 32.976 22.824H31.014C30.8984 22.8337 30.788 22.8761 30.6955 22.9463C30.6031 23.0164 30.5325 23.1113 30.492 23.22C30.4277 23.3192 30.3935 23.4348 30.3935 23.553C30.3935 23.6712 30.4277 23.7868 30.492 23.886L31.878 25.272C32.1594 25.5514 32.3827 25.8837 32.5351 26.2498C32.6874 26.6159 32.7659 27.0085 32.7659 27.405C32.7659 27.8015 32.6874 28.1941 32.5351 28.5602C32.3827 28.9263 32.1594 29.2586 31.878 29.538L29.52 31.932C29.2439 32.2161 28.9137 32.4421 28.5489 32.5966C28.1842 32.7512 27.7922 32.8312 27.396 32.832C26.5922 32.8214 25.8241 32.4987 25.254 31.932L23.868 30.6C23.7688 30.5357 23.6532 30.5015 23.535 30.5015C23.4168 30.5015 23.3012 30.5357 23.202 30.6C22.932 30.708 22.734 30.888 22.734 31.14V33.102C22.697 33.8836 22.3602 34.6208 21.7937 35.1605C21.2271 35.7002 20.4744 36.0009 19.692 36ZM16.866 32.4H19.134V31.014C19.1417 30.1839 19.3955 29.3748 19.8633 28.6891C20.3311 28.0034 20.9919 27.4719 21.762 27.162C22.5352 26.824 23.3916 26.724 24.2219 26.8746C25.0522 27.0253 25.8188 27.4199 26.424 28.008L27.396 28.98L28.98 27.396L28.008 26.406C27.4236 25.81 27.0294 25.0538 26.8756 24.2333C26.7218 23.4129 26.8152 22.5652 27.144 21.798C27.4567 21.0313 27.9894 20.3743 28.6749 19.9098C29.3604 19.4454 30.168 19.1942 30.996 19.188H32.4V16.866H31.014C30.1839 16.8583 29.3748 16.6045 28.6891 16.1367C28.0034 15.6689 27.4719 15.0081 27.162 14.238C26.824 13.4648 26.724 12.6084 26.8746 11.7781C27.0253 10.9478 27.4199 10.1812 28.008 9.576L28.98 8.604L27.396 7.02L26.406 7.992C25.8007 8.54489 25.05 8.91333 24.2424 9.05391C23.4347 9.1945 22.6037 9.10139 21.8472 8.78555C21.0907 8.4697 20.4402 7.94427 19.9722 7.27113C19.5043 6.59799 19.2385 5.80516 19.206 4.986V3.6H16.866V4.986C16.8583 5.81606 16.6045 6.62519 16.1367 7.3109C15.6689 7.99662 15.0081 8.52808 14.238 8.838C13.4648 9.17599 12.6084 9.27602 11.7781 9.12535C10.9478 8.97468 10.1812 8.58012 9.576 7.992L8.604 7.02L7.02 8.604L7.992 9.594C8.54489 10.1993 8.91333 10.95 9.05391 11.7576C9.1945 12.5653 9.10139 13.3963 8.78555 14.1528C8.4697 14.9093 7.94427 15.5598 7.27113 16.0278C6.59799 16.4957 5.80516 16.7615 4.986 16.794H3.6V19.062H4.986C5.81606 19.0697 6.62519 19.3235 7.3109 19.7913C7.99662 20.2591 8.52808 20.9199 8.838 21.69C9.17599 22.4632 9.27602 23.3196 9.12535 24.1499C8.97468 24.9802 8.58012 25.7468 7.992 26.352L7.02 27.324L8.604 28.908L9.594 27.936C10.1993 27.3831 10.95 27.0147 11.7576 26.8741C12.5653 26.7335 13.3963 26.8266 14.1528 27.1425C14.9093 27.4583 15.5598 27.9837 16.0278 28.6569C16.4957 29.33 16.7615 30.1228 16.794 30.942L16.866 32.4Z" />
          <path d="M18.0002 24.3C16.7542 24.3 15.5361 23.9305 14.5001 23.2382C13.4641 22.546 12.6566 21.562 12.1798 20.4109C11.7029 19.2597 11.5782 17.993 11.8213 16.7709C12.0643 15.5488 12.6644 14.4263 13.5454 13.5452C14.4265 12.6641 15.549 12.0641 16.7711 11.821C17.9932 11.5779 19.2599 11.7027 20.4111 12.1795C21.5623 12.6563 22.5462 13.4638 23.2385 14.4999C23.9307 15.5359 24.3002 16.7539 24.3002 18C24.3002 19.6708 23.6364 21.2732 22.455 22.4547C21.2735 23.6362 19.6711 24.3 18.0002 24.3ZM18.0002 15.3C17.4662 15.3 16.9442 15.4583 16.5002 15.755C16.0561 16.0517 15.7101 16.4733 15.5057 16.9667C15.3014 17.4601 15.2479 18.0029 15.3521 18.5267C15.4563 19.0504 15.7134 19.5315 16.091 19.9091C16.4686 20.2867 16.9497 20.5439 17.4735 20.6481C17.9972 20.7523 18.5401 20.6988 19.0334 20.4944C19.5268 20.2901 19.9485 19.944 20.2452 19.5C20.5418 19.056 20.7002 18.534 20.7002 18C20.7002 17.2839 20.4157 16.5971 19.9094 16.0908C19.403 15.5844 18.7163 15.3 18.0002 15.3Z" />
        </svg>
      </Button>

      <Button type="settings">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="#37433A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30.8498 35.9914H10.2832C8.91959 35.9914 7.61179 35.4497 6.64755 34.4855C5.68331 33.5212 5.1416 32.2134 5.1416 30.8498V10.2833C5.1416 8.91962 5.68331 7.61182 6.64755 6.64758C7.61179 5.68334 8.91959 5.14163 10.2832 5.14163H30.8498C32.2134 5.14163 33.5212 5.68334 34.4854 6.64758C35.4497 7.61182 35.9914 8.91962 35.9914 10.2833V30.8498C35.9914 32.2134 35.4497 33.5212 34.4854 34.4855C33.5212 35.4497 32.2134 35.9914 30.8498 35.9914ZM10.2832 8.56938C9.82868 8.56938 9.39275 8.74995 9.07134 9.07137C8.74993 9.39278 8.56936 9.82871 8.56936 10.2833V30.8498C8.56936 31.3043 8.74993 31.7403 9.07134 32.0617C9.39275 32.3831 9.82868 32.5637 10.2832 32.5637H30.8498C31.3043 32.5637 31.7402 32.3831 32.0617 32.0617C32.3831 31.7403 32.5636 31.3043 32.5636 30.8498V10.2833C32.5636 9.82871 32.3831 9.39278 32.0617 9.07137C31.7402 8.74995 31.3043 8.56938 30.8498 8.56938H10.2832Z" />
        </svg>
      </Button>
    </>
  );
};

export default Settings;
