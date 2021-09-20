import React from "react";
import {Link} from "react-router-dom"
import'./Navbar.css'
export default function Navbar({ toggle }) {
  return (
    <>
    <nav className="navbar">
     <div className="navbar-container">
        <Link to="/" className="navbar-brand">
              <h2> Ramen </h2>
         </Link>
        <div className ='nav-items' onClick={toggle}>
          <p>Menu</p>
          <div className="bar">
             <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.5205 28.2011C57.3773 29.0581 56.8576 30.825 57.2939 31.8791C57.7463 32.9718 59.3482 33.8626 59.3479 35.027C59.3483 36.1908 57.7459 37.0823 57.2939 38.1749C56.8577 39.2289 57.3775 40.9958 56.5207 41.8526C55.6636 42.7097 53.8972 42.1897 52.8428 42.6259C51.75 43.078 50.8587 44.6803 49.6946 44.6798C48.5301 44.68 47.6395 43.078 46.5468 42.6258C45.493 42.1893 43.7259 42.7093 42.8691 41.8524C42.0122 40.9955 42.5319 39.2285 42.0956 38.1744C41.6435 37.0816 40.0414 36.1912 40.0417 35.0266C40.0414 33.8626 41.6435 32.9713 42.0957 31.8787C42.5319 30.8245 42.0118 29.0579 42.8689 28.2009C43.7259 27.3438 45.4924 27.8638 46.5467 27.4277C47.6396 26.9756 48.531 25.3735 49.6945 25.3736C50.8589 25.3735 51.75 26.9753 52.8424 27.4275C53.8967 27.8641 55.6636 27.3442 56.5205 28.2011Z" fill="#FFB792"/>
                    <path d="M49.6948 40.4634C52.6973 40.4634 55.1312 38.0294 55.1312 35.027C55.1312 32.0246 52.6973 29.5906 49.6948 29.5906C46.6924 29.5906 44.2584 32.0246 44.2584 35.027C44.2584 38.0294 46.6924 40.4634 49.6948 40.4634Z" fill="#F9D9CA"/>
                    <path d="M49.6948 37.057C50.8159 37.057 51.7247 36.1481 51.7247 35.027C51.7247 33.9059 50.8159 32.997 49.6948 32.997C48.5736 32.997 47.6648 33.9059 47.6648 35.027C47.6648 36.1481 48.5736 37.057 49.6948 37.057Z" fill="white"/>
                    <path d="M37.0368 56.1825C32.7868 56.1825 29.3413 52.7371 29.3413 48.487V32.6342C29.3413 28.3839 32.7867 24.9387 37.0368 24.9387C41.2872 24.9387 44.7326 28.3839 44.7326 32.6342L44.7323 48.4867C44.7322 52.737 41.287 56.1825 37.0368 56.1825Z" fill="#FFF4BD"/>
                    <path d="M32.4197 32.6342C32.4197 30.088 34.4909 28.0168 37.037 28.0168C39.5831 28.0168 41.6544 30.088 41.6544 32.6342V48.4867C41.6544 51.0326 39.5831 53.1041 37.037 53.1041C34.491 53.1041 32.4197 51.0327 32.4197 48.4867V32.6342Z" fill="#FFE783"/>
                    <path d="M35.4978 32.6342C35.4978 31.7855 36.188 31.095 37.0369 31.095C37.8854 31.095 38.5762 31.7855 38.5762 32.6342V48.4867C38.5762 49.3353 37.8855 50.0258 37.0369 50.0258C36.1882 50.0258 35.4978 49.3351 35.4978 48.4867V32.6342Z" fill="#FFF4BD"/>
                    <path d="M23.4385 28.1681C23.4385 29.9516 21.9927 31.3973 20.209 31.3973C18.4256 31.3973 16.9799 29.9516 16.9799 28.1681C16.9799 26.3846 18.4255 24.9388 20.209 24.9388C21.9926 24.9388 23.4385 26.3846 23.4385 28.1681Z" fill="#B0CE6F"/>
                    <path d="M20.9495 39.1602V34.4909C20.9495 30.2409 17.504 26.7954 13.254 26.7954C9.0036 26.7954 5.55835 30.2407 5.55835 34.4909V39.1602H20.9495Z" fill="#FFF4BD"/>
                    <path d="M17.8713 39.1602V34.4909C17.8713 31.9448 15.7999 29.8735 13.254 29.8735C10.708 29.8735 8.63647 31.9448 8.63647 34.4909V39.1602H17.8713Z" fill="#FFE783"/>
                    <path d="M14.7931 39.1602V34.4909C14.7931 33.6422 14.1026 32.9517 13.254 32.9517C12.4052 32.9517 11.7147 33.6423 11.7147 34.4909V39.1602H14.7931Z" fill="#FFF4BD"/>
                    <path d="M25.5398 59.1632C21.2895 59.1632 17.8441 55.718 17.8441 51.4677V35.6151C17.8441 31.365 21.2895 27.9195 25.5398 27.9195C29.7898 27.9195 33.2352 31.3649 33.2352 35.6151V51.4678C33.2352 55.718 29.7899 59.1632 25.5398 59.1632Z" fill="#FFF4BD"/>
                    <path d="M20.9225 35.615C20.9225 33.0691 22.9939 30.9976 25.5399 30.9976C28.0859 30.9976 30.1571 33.0691 30.1571 35.615V51.4678C30.1571 54.0139 28.0859 56.0852 25.5399 56.0852C22.9939 56.0852 20.9225 54.0139 20.9225 51.4678V35.615Z" fill="#FFE783"/>
                    <path d="M24.0006 35.615C24.0006 34.7666 24.6911 34.076 25.5399 34.076C26.3883 34.076 27.0788 34.7666 27.0788 35.615V51.4678C27.0788 52.3165 26.3885 53.0069 25.5399 53.0069C24.6912 53.0069 24.0006 52.3165 24.0006 51.4678V35.615Z" fill="#FFF4BD"/>
                    <path d="M11.1997 35.4962C11.1997 37.2797 9.75396 38.7255 7.97027 38.7255C6.18696 38.7255 4.74097 37.2797 4.74097 35.4962C4.74097 33.7128 6.18684 32.2669 7.97027 32.2669C9.75371 32.2669 11.1997 33.7128 11.1997 35.4962Z" fill="#FF8150"/>
                    <path d="M45.6507 61.375C45.6507 62.8276 44.473 64.0051 43.0207 64.0051H21.9797C20.527 64.0051 19.3496 62.8275 19.3496 61.375V58.9201C19.3496 57.4675 20.5271 56.29 21.9797 56.29H43.0205C44.473 56.29 45.6506 57.4678 45.6506 58.9201L45.6507 61.375Z" fill="white"/>
                    <path opacity="0.1" d="M24.9032 61.375V58.9201C24.9032 57.4675 26.0807 56.29 27.5333 56.29H21.9797C20.527 56.29 19.3496 57.4678 19.3496 58.9201V61.375C19.3496 62.8276 20.5271 64.0051 21.9797 64.0051H27.5333C26.0805 64.0051 24.9032 62.8276 24.9032 61.375Z" fill="black"/>
                    <path d="M25.3001 60.1476C13.0047 60.1476 3.0022 50.1447 3.0022 37.8498C3.0022 36.9945 3.69549 36.3014 4.55077 36.3014H60.4501C61.305 36.3014 61.9985 36.9946 61.9985 37.8498C61.9985 50.1447 51.9959 60.1476 39.7005 60.1476H25.3001Z" fill="white"/>
                    <path opacity="0.1" d="M8.888 37.8499C8.888 36.9945 9.58142 36.3015 10.4366 36.3015H4.55077C3.69562 36.3015 3.0022 36.9948 3.0022 37.8499C3.0022 50.1448 13.0046 60.1477 25.3001 60.1477H31.1859C18.8905 60.1476 8.888 50.1448 8.888 37.8499Z" fill="black"/>
                    <path d="M36.1586 40.4386H3.33948C3.27651 40.4386 3.21507 40.4451 3.15527 40.4564C3.23322 41.123 3.34012 41.7809 3.47558 42.4284H36.1586C36.7082 42.4284 37.1536 41.9829 37.1536 41.4334C37.1536 40.8841 36.7082 40.4386 36.1586 40.4386Z" fill="#609174"/>
                    <path d="M14.7743 45.1907H4.67606C4.53337 45.1907 4.39778 45.2213 4.27515 45.2756C4.50506 45.9249 4.7643 46.5604 5.05121 47.1806H14.7744C15.324 47.1806 15.7694 46.7351 15.7694 46.1857C15.7691 45.6361 15.3239 45.1907 14.7743 45.1907Z" fill="#609174"/>
                    <path d="M60.45 35.3064H59.6018C59.6135 35.2154 59.6213 35.1229 59.6213 35.0274C59.6216 34.011 58.9188 33.2522 58.3541 32.6424C58.0582 32.3229 57.7521 31.9926 57.6451 31.7341C57.5484 31.5009 57.5346 31.0691 57.5209 30.6516C57.4935 29.8061 57.4591 28.7537 56.7137 28.008C55.9684 27.2627 54.9159 27.2284 54.0703 27.2009C53.6528 27.1871 53.221 27.1733 52.9878 27.0767C52.7292 26.9697 52.3988 26.6637 52.0792 26.3679C51.4694 25.8034 50.7105 25.1005 49.6941 25.1007C48.6787 25.1007 47.9202 25.8031 47.3106 26.3675C46.9909 26.6636 46.6602 26.9698 46.4012 27.0768C46.1681 27.1733 45.7365 27.1871 45.3191 27.2007C44.8853 27.2148 44.3976 27.2316 43.9243 27.3446C42.3343 25.2789 39.8387 23.9443 37.0364 23.9443C33.9531 23.9443 31.2408 25.5592 29.698 27.9868C28.4621 27.3104 27.045 26.9252 25.5394 26.9252C25.1089 26.9252 24.6859 26.9579 24.272 27.0187C23.77 25.2467 22.1392 23.9444 20.2085 23.9444C18.5166 23.9444 17.055 24.9449 16.3811 26.3848C15.4103 26.0085 14.3559 25.8011 13.2535 25.8011C9.04448 25.8011 5.52598 28.809 4.73176 32.7878C4.12835 33.508 3.76069 34.4313 3.74698 35.4391C2.73745 35.7763 2.00684 36.7289 2.00684 37.8504C2.00684 43.6278 4.14549 49.1729 8.02873 53.4644C8.39778 53.8721 9.02671 53.9033 9.4341 53.5346C9.84149 53.1659 9.87311 52.5368 9.50431 52.1294C5.95317 48.204 3.99721 43.133 3.99721 37.8501C3.99721 37.5449 4.24553 37.2965 4.55085 37.2965H60.4502C60.7554 37.2965 61.0036 37.5449 61.0036 37.8501C61.0036 49.5965 51.4471 59.1529 39.7006 59.1529H25.3001C20.5443 59.1529 16.043 57.6137 12.2823 54.7016C11.848 54.3651 11.2229 54.4445 10.8867 54.879C10.5503 55.3135 10.6296 55.9385 11.0642 56.2748C13.2859 57.9951 15.7442 59.2763 18.355 60.0917V61.375C18.355 63.3739 19.9811 65 21.98 65H43.0207C45.0196 65 46.6457 63.3739 46.6457 61.375V60.0849C56.1079 57.1229 62.9932 48.2756 62.9932 37.8497C62.9932 36.4474 61.8524 35.3064 60.45 35.3064ZM45.3839 29.1892C45.9791 29.1698 46.5948 29.15 47.1622 28.9152C47.7507 28.6719 48.2352 28.2232 48.6627 27.8274C48.9988 27.5163 49.4587 27.0901 49.6947 27.0901C49.931 27.0901 50.3913 27.5162 50.7275 27.8276C51.1548 28.2232 51.6389 28.6716 52.2268 28.9148C52.7943 29.15 53.4103 29.1699 54.0057 29.1893C54.5011 29.2054 55.1175 29.2255 55.3068 29.4147C55.4961 29.6041 55.5162 30.2207 55.5322 30.7159C55.5516 31.3115 55.5715 31.9272 55.8065 32.4948C56.0499 33.0828 56.4984 33.567 56.894 33.9944C57.2053 34.3304 57.6315 34.7905 57.6315 35.0275C57.6315 35.1019 57.5891 35.1985 57.5214 35.3064H55.7121C55.7164 35.2137 55.7198 35.1207 55.7198 35.0268C55.7198 31.7046 53.017 29.0019 49.6949 29.0019C48.0687 29.0019 46.5932 29.6518 45.5083 30.7029C45.3901 30.1841 45.2269 29.6827 45.0201 29.2035C45.1432 29.1971 45.2669 29.193 45.3839 29.1892ZM48.8576 35.3064C48.828 35.2183 48.8114 35.1245 48.8114 35.0268C48.8114 34.5398 49.2075 34.1435 49.6945 34.1435C50.1817 34.1435 50.5781 34.5398 50.5781 35.0268C50.5781 35.1245 50.5615 35.2183 50.5319 35.3064H48.8576ZM49.6947 32.1539C48.1107 32.1539 46.8219 33.4428 46.8219 35.0269C46.8219 35.1213 46.8276 35.2144 46.8366 35.3066H45.7273V34.2954C46.0728 32.4186 47.7197 30.9919 49.6949 30.9919C51.9198 30.9919 53.7301 32.8021 53.7301 35.027C53.7301 35.1212 53.725 35.2141 53.7185 35.3067H52.5536C52.5626 35.2146 52.5683 35.1215 52.5683 35.027C52.5681 33.4426 51.2792 32.1539 49.6947 32.1539ZM37.0368 25.9337C40.7317 25.9337 43.7376 28.9396 43.7376 32.6343L43.7375 35.3064H42.6491V32.6343C42.6491 29.5397 40.1315 27.022 37.0368 27.022C34.9173 27.022 33.0688 28.203 32.1143 29.9415C31.8684 29.6569 31.6052 29.3879 31.3248 29.1371C32.504 27.2172 34.623 25.9337 37.0368 25.9337ZM37.5811 35.3064H36.4928V32.6343C36.4928 32.3342 36.7369 32.0901 37.0369 32.0901C37.3371 32.0901 37.5813 32.3343 37.5813 32.6343V35.3064H37.5811ZM37.0368 30.1002C35.6396 30.1002 34.5028 31.2371 34.5028 32.6343V35.3064H34.2221C34.1815 34.1495 33.9138 33.0502 33.4621 32.0503C33.7423 30.3297 35.2383 29.0118 37.0368 29.0118C39.0342 29.0118 40.6592 30.637 40.6592 32.6343V35.3064H39.571V32.6343C39.5709 31.2371 38.434 30.1002 37.0368 30.1002ZM32.2322 35.3064H31.1427C30.982 32.3549 28.5305 30.0028 25.5398 30.0028C22.5489 30.0028 20.0973 32.3548 19.9366 35.3064H18.847C19.009 31.7547 21.9486 28.9146 25.5398 28.9146C29.131 28.9145 32.0705 31.7547 32.2322 35.3064ZM25.5398 33.0812C24.247 33.0812 23.1793 34.0545 23.0263 35.3064H21.9314C22.0885 33.453 23.6462 31.9926 25.5396 31.9926C27.433 31.9926 28.9906 33.4529 29.1476 35.3064H28.0525C27.8998 34.0545 26.8324 33.0812 25.5398 33.0812ZM25.9869 35.3064H25.0924C25.1906 35.1645 25.3544 35.0709 25.5398 35.0709C25.7251 35.0709 25.8886 35.1645 25.9869 35.3064ZM15.788 35.3064V34.4909C15.788 33.0936 14.6512 31.9568 13.254 31.9568C12.4627 31.9568 11.7579 32.323 11.2933 32.893C11.0675 32.6052 10.8054 32.3469 10.5135 32.126C11.1782 31.3565 12.1598 30.8683 13.254 30.8683C15.2513 30.8683 16.8763 32.4933 16.8763 34.4908V34.9637C16.868 35.0773 16.8612 35.1914 16.8573 35.3062H15.788V35.3064ZM7.9702 33.2618C9.1383 33.2618 10.0982 34.1631 10.1951 35.3064H5.74548C5.84222 34.1631 6.80198 33.2618 7.9702 33.2618ZM13.7981 35.3064H12.7097V34.4909C12.7097 34.1908 12.954 33.9466 13.2541 33.9466C13.5542 33.9466 13.7982 34.1909 13.7982 34.4909V35.3064H13.7981ZM20.209 25.9337C21.2206 25.9337 22.0761 26.61 22.3504 27.5339C21.4726 27.8816 20.6641 28.3672 19.9529 28.9658C19.4313 28.3342 18.823 27.7768 18.1455 27.3132C18.4818 26.5041 19.2797 25.9337 20.209 25.9337ZM13.254 27.7903C15.4202 27.7903 17.349 28.8242 18.5745 30.4238C18.3413 30.736 18.1295 31.0649 17.9393 31.4074C16.9349 29.8854 15.2102 28.8787 13.254 28.8787C11.3341 28.8787 9.63748 29.8485 8.62516 31.3231C8.41162 31.2898 8.19288 31.2721 7.97008 31.2721C7.76137 31.2721 7.55647 31.2879 7.35588 31.3172C8.48894 29.2195 10.7071 27.7903 13.254 27.7903ZM44.6558 61.375C44.6558 62.2766 43.9223 63.0101 43.0207 63.0101H21.9797C21.0781 63.0101 20.3446 62.2766 20.3446 61.375V60.6161C21.9551 60.9642 23.6127 61.1424 25.2999 61.1424H39.7004C41.4005 61.1424 43.0584 60.9576 44.6558 60.6101V61.375Z" fill="black"/>
                   </svg>
          </div>
        </div>
     </div>
    </nav>
       
    </>
  );
}