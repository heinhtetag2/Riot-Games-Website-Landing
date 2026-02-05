import svgPaths from "./svg-6e3m3qdezd";
import imgLeagueHomepageProductcard2Png from "figma:asset/2358368c38b938c6e0258306e64c1cad86a89159.png";
import imgLolHomepagecarousellogoPng from "figma:asset/963cd2c9cd11f609868b7f393905dd0b4e3c497b.png";
import imgValHomepageProductcardS26Png from "figma:asset/bfaa6c7301d710f3a3cdf9fcbefde3c0fd0dbd2a.png";
import imgValHomepagecarousellogoPng from "figma:asset/60072c2e9ff87c375fa1df59b4024265293d710c.png";
import imgTftHomepagecarousellogoPng from "figma:asset/5dd23c5ef3fd2260567461e920a641f1f0637202.png";
import imgWrHomepagecarousellogoPng from "figma:asset/73338b56c75a7eaf3ac4026f73be8c6d6838dd9d.png";
import imgLorHomepagecarousellogoPng from "figma:asset/12d8b4bb881976c9e4c9396b1064088448977274.png";
import img2XkoEarlyaccessHomepagecarousellogoPng from "figma:asset/28ccbbd18ec44fbaa26852bfe85b4df9192ff1df.png";
import imgRiftboundHomepagecarousellogoPng from "figma:asset/d5760ffc42819e264ac0158c1108bbf426611b2b.png";
import { imgBackground, imgBackground1, imgBackground2, imgBackground3, imgBackground4, imgBackground5, imgBackground6, imgBackground7, imgBackground8 } from "./svg-bj45u";

function LeagueHomepageProductcard2Png() {
  return (
    <div className="absolute h-[602.49px] left-0 top-0 w-[358.72px]" data-name="league-homepage-productcard-2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.01%] w-full" src={imgLeagueHomepageProductcard2Png} />
      </div>
    </div>
  );
}

function LolHomepagecarousellogoPng() {
  return (
    <div className="h-[50.475px] max-h-[50.474998474121094px] max-w-[179.36000061035156px] relative shrink-0 w-[89.68px]" data-name="lol-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLolHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[30px] min-h-[100.94999694824219px] top-[30px] w-[358.72px]" data-name="Container">
      <LolHomepagecarousellogoPng />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[20.996px] relative shrink-0 w-[22.23px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.23 20.9958">
        <g id="SVG">
          <path d={svgPaths.p36446900} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="aspect-[22.229999542236328/21] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[20.996px] relative shrink-0 w-[18.52px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.52 20.9961">
        <g id="SVG">
          <path d={svgPaths.p2c19d000} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="aspect-[18.520000457763672/21] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex gap-[8.01px] items-center right-[82.5px] w-[48.76px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[602.49px] left-0 top-0 w-[358.72px]" data-name="Container">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[602.49px] left-0 top-0 w-[358.72px]" data-name="Overlay" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function MaskGroup1() {
  return <div className="absolute inset-[-4px]" data-name="Mask Group" />;
}

function Background() {
  return (
    <div className="absolute aspect-[358.7200012207031/602.489990234375] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_602.49px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
      <LeagueHomepageProductcard2Png />
      <Container1 />
      <MaskGroup1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="h-[602.49px] relative shrink-0 w-[358.72px]" data-name="Mask Group">
      <Background />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col h-[602.49px] items-start relative shrink-0 w-[302.72px]" data-name="Link">
      <MaskGroup />
    </div>
  );
}

function ValHomepageProductcardS26Png() {
  return (
    <div className="absolute h-[580.95px] left-0 top-0 w-[345.89px]" data-name="val-homepage-productcard-s26.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-full" src={imgValHomepageProductcardS26Png} />
      </div>
    </div>
  );
}

function ValHomepagecarousellogoPng() {
  return (
    <div className="h-[48.67px] max-h-[48.66999816894531px] max-w-[172.94500732421875px] relative shrink-0 w-[86.47px]" data-name="val-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgValHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[28.92px] min-h-[97.33999633789062px] top-[28.93px] w-[345.89px]" data-name="Container">
      <ValHomepagecarousellogoPng />
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[20.25px] relative shrink-0 w-[21.44px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.44 20.2497">
        <g id="SVG">
          <path d={svgPaths.p31df1580} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="aspect-[21.440000534057617/20.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="h-[20.247px] relative shrink-0 w-[27.84px]" data-name="SVG">
      <div className="absolute inset-[0_0_0_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.8417 20.2473">
          <g id="SVG">
            <path d={svgPaths.p38f03880} fill="var(--fill-0, #FCFCFC)" id="Vector" />
            <path d={svgPaths.p3dd48c00} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="aspect-[27.84000015258789/20.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-[20.25px] relative shrink-0 w-[21.44px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.44 20.2497">
        <g id="SVG">
          <path d={svgPaths.p75f6c00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="aspect-[21.440000534057617/20.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[11.57px] content-stretch flex gap-[7.7px] items-center right-[79.55px] w-[86.15px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[580.95px] left-0 top-0 w-[345.89px]" data-name="Container">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[580.95px] left-0 top-0 w-[345.89px]" data-name="Overlay" />
      <Container7 />
      <Container8 />
    </div>
  );
}

function MaskGroup3() {
  return <div className="absolute inset-[-3.86px_-3.85px_-3.85px_-3.86px]" data-name="Mask Group" />;
}

function Background1() {
  return (
    <div className="absolute aspect-[345.8900146484375/580.9500122070312] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_580.95px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <ValHomepageProductcardS26Png />
      <Container6 />
      <MaskGroup3 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="h-[580.95px] relative shrink-0 w-[345.89px]" data-name="Mask Group">
      <Background1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col h-[602.49px] items-start pb-[8.69px] pt-[12.85px] relative shrink-0 w-[296.3px]" data-name="Link">
      <MaskGroup2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[-8px] top-0">
      <Link />
      <Link1 />
    </div>
  );
}

function TftHomepagecarousellogoPng() {
  return (
    <div className="h-[34.255px] max-h-[34.255001068115234px] max-w-[121.72000122070312px] relative shrink-0 w-[60.86px]" data-name="tft-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTftHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[20.36px] min-h-[68.51000213623047px] top-[20.36px] w-[243.44px]" data-name="Container">
      <TftHomepagecarousellogoPng />
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[14.252px] relative shrink-0 w-[15.09px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.09 14.2522">
        <g id="SVG">
          <path d={svgPaths.p3bec5200} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="aspect-[15.09000015258789/14.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[14.251px] relative shrink-0 w-[12.57px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.57 14.2506">
        <g id="SVG">
          <path d={svgPaths.p22e34b00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="aspect-[12.569999694824219/14.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="h-[14.247px] relative shrink-0 w-[9.97px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.97 14.2474">
        <g id="SVG">
          <path d={svgPaths.p3f101800} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="aspect-[9.970000267028809/14.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-[8.15px] content-stretch flex gap-[5.4px] items-center right-[55.99px] w-[48.49px]" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[408.88px] left-0 top-0 w-[243.44px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute aspect-[243.44000244140625/408.8699951171875] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_408.88px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground2}')` }}>
      <Container12 />
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="h-[408.87px] relative shrink-0 w-full" data-name="Mask Group">
      <Background2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-1473.6px_0_2626.1px] items-start pb-[83.67px] pr-[77.65px] pt-[109.95px]" data-name="Link">
      <MaskGroup4 />
    </div>
  );
}

function WrHomepagecarousellogoPng() {
  return (
    <div className="h-[32.45px] max-h-[32.45000076293945px] max-w-[115.30500030517578px] relative shrink-0 w-[57.655px]" data-name="wr-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[19.29px] min-h-[64.9000015258789px] top-[19.29px] w-[230.61px]" data-name="Container">
      <WrHomepagecarousellogoPng />
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[13.504px] relative shrink-0 w-[9.45px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45 13.5043">
        <g id="SVG">
          <path d={svgPaths.p3dc9d672} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="aspect-[9.449999809265137/13.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bottom-[7.71px] content-stretch flex items-center right-[53.03px] w-[9.45px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[387.33px] left-0 top-0 w-[230.61px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute aspect-[230.61000061035156/387.3299865722656] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_387.33px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground3}')` }}>
      <Container18 />
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="h-[387.33px] relative shrink-0 w-full" data-name="Mask Group">
      <Background3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-1768.32px_0_2931.24px] items-start pb-[93.75px] pr-[80.06px] pt-[121.41px]" data-name="Link">
      <MaskGroup5 />
    </div>
  );
}

function LorHomepagecarousellogoPng() {
  return (
    <div className="h-[30.645px] max-h-[30.645000457763672px] max-w-[108.8949966430664px] relative shrink-0 w-[54.445px]" data-name="lor-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLorHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[18.21px] min-h-[61.290000915527344px] top-[18.22px] w-[217.79px]" data-name="Container">
      <LorHomepagecarousellogoPng />
    </div>
  );
}

function Svg9() {
  return (
    <div className="h-[12.751px] relative shrink-0 w-[13.5px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 12.7505">
        <g id="SVG">
          <path d={svgPaths.p1f803c80} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="aspect-[13.5/12.75] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[12.747px] relative shrink-0 w-[8.92px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.92 12.7469">
        <g id="SVG">
          <path d={svgPaths.p268a7080} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="aspect-[8.920000076293945/12.75] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bottom-[7.28px] content-stretch flex gap-[4.85px] items-center right-[50.09px] w-[27.28px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[365.78px] left-0 top-0 w-[217.79px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute aspect-[217.77999877929688/365.7900085449219] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_365.763px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground4}')` }}>
      <Container22 />
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="h-[365.79px] relative shrink-0 w-full" data-name="Mask Group">
      <Background4 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-2063.04px_0_3236.38px] items-start pb-[103.98px] pr-[82.47px] pt-[132.72px]" data-name="Link">
      <MaskGroup6 />
    </div>
  );
}

function Component2XkoEarlyaccessHomepagecarousellogoPng() {
  return (
    <div className="h-[28.845px] max-h-[28.844999313354492px] max-w-[102.5px] relative shrink-0 w-[51.25px]" data-name="2xko-earlyaccess-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2XkoEarlyaccessHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[17.15px] min-h-[57.689998626708984px] top-[17.15px] w-[205px]" data-name="Container">
      <Component2XkoEarlyaccessHomepagecarousellogoPng />
    </div>
  );
}

function Svg11() {
  return (
    <div className="h-[12.004px] relative shrink-0 w-[12.71px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.71 12.0044">
        <g id="SVG">
          <path d={svgPaths.p205e6f00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="aspect-[12.710000038146973/12] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bottom-[6.85px] content-stretch flex items-center right-[47.14px] w-[12.71px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[344.31px] left-0 top-0 w-[205px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute aspect-[205/344.32000732421875] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_344.31px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground5}')` }}>
      <Container27 />
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="h-[344.32px] relative shrink-0 w-full" data-name="Mask Group">
      <Background5 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-2357.76px_0_3536.63px] items-start pb-[114.33px] pl-[4.85px] pr-[84.87px] pt-[143.84px]" data-name="Link">
      <MaskGroup7 />
    </div>
  );
}

function RiftboundHomepagecarousellogoPng() {
  return (
    <div className="h-[27.04px] max-h-[27.040000915527344px] max-w-[96.08499908447266px] relative shrink-0 w-[48.045px]" data-name="riftbound-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[99.99%]" src={imgRiftboundHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[16.07px] min-h-[54.08000183105469px] top-[16.07px] w-[192.17px]" data-name="Container">
      <RiftboundHomepagecarousellogoPng />
    </div>
  );
}

function Svg12() {
  return (
    <div className="h-[11.251px] relative shrink-0 w-[9.56px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.56 11.251">
        <g id="SVG">
          <path d={svgPaths.pb576980} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.12471" />
          <path d={svgPaths.p1be34100} id="Vector_2" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.12471" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="aspect-[9.5600004196167/11.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bottom-[6.43px] content-stretch flex items-center right-[44.19px] w-[9.56px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[322.77px] left-0 top-0 w-[192.17px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute aspect-[192.1699981689453/322.7699890136719] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_322.77px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground6}')` }}>
      <Container31 />
    </div>
  );
}

function MaskGroup8() {
  return (
    <div className="h-[322.77px] relative shrink-0 w-full" data-name="Mask Group">
      <Background6 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-2652.48px_0_3831.35px] items-start pb-[124.87px] pl-[15.27px] pr-[87.28px] pt-[154.85px]" data-name="Link">
      <MaskGroup8 />
    </div>
  );
}

function LolHomepagecarousellogoPng1() {
  return (
    <div className="h-[25.24px] max-h-[25.239999771118164px] max-w-[89.69499969482422px] relative shrink-0 w-[44.836px]" data-name="lol-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.98%] left-0 max-w-none top-[0.01%] w-[99.99%]" src={imgLolHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] min-h-[50.4900016784668px] top-[15px] w-[179.39px]" data-name="Container">
      <LolHomepagecarousellogoPng1 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="h-[10.503px] relative shrink-0 w-[11.12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.12 10.5026">
        <g id="SVG">
          <path d={svgPaths.p603a80} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="aspect-[11.119999885559082/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="h-[10.498px] relative shrink-0 w-[9.26px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.26 10.4981">
        <g id="SVG">
          <path d={svgPaths.p17d61c00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="aspect-[9.260000228881836/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bottom-[6px] content-stretch flex gap-[4px] items-center right-[41.26px] w-[24.38px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[301.29px] left-0 top-0 w-[179.39px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute aspect-[179.38999938964844/301.29998779296875] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_301.29px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground7}')` }}>
      <Container35 />
    </div>
  );
}

function MaskGroup9() {
  return (
    <div className="h-[301.3px] relative shrink-0 w-full" data-name="Mask Group">
      <Background7 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-2947.19px_0_4126.07px] items-start pb-[135.53px] pl-[25.65px] pr-[89.67px] pt-[165.66px]" data-name="Link">
      <MaskGroup9 />
    </div>
  );
}

function ValHomepagecarousellogoPng1() {
  return (
    <div className="h-[25.24px] max-h-[25.239999771118164px] max-w-[89.68000030517578px] relative shrink-0 w-[44.849px]" data-name="val-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-full" src={imgValHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] min-h-[50.47999954223633px] top-[15px] w-[179.36px]" data-name="Container">
      <ValHomepagecarousellogoPng1 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="h-[10.503px] relative shrink-0 w-[11.12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.12 10.5026">
        <g id="SVG">
          <path d={svgPaths.p603a80} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="aspect-[11.119999885559082/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="h-[10.502px] relative shrink-0 w-[14.44px]" data-name="SVG">
      <div className="absolute inset-[0_0_0_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4408 10.5018">
          <g id="SVG">
            <path d={svgPaths.p1a5e9c00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
            <path d={svgPaths.p7787180} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="aspect-[14.4399995803833/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="h-[10.503px] relative shrink-0 w-[11.12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.12 10.5026">
        <g id="SVG">
          <path d={svgPaths.p23939900} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="aspect-[11.119999885559082/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bottom-[6.01px] content-stretch flex gap-[4px] items-center right-[41.25px] w-[44.67px]" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[301.25px] left-0 top-0 w-[179.36px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute aspect-[179.36000061035156/301.239990234375] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_301.25px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground8}')` }}>
      <Container40 />
    </div>
  );
}

function MaskGroup10() {
  return (
    <div className="h-[301.24px] relative shrink-0 w-full" data-name="Mask Group">
      <Background8 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-3241.91px_0_4420.78px] items-start pb-[135.56px] pl-[25.68px] pr-[89.68px] pt-[165.69px]" data-name="Link">
      <MaskGroup10 />
    </div>
  );
}

function TftHomepagecarousellogoPng1() {
  return (
    <div className="h-[25.24px] max-h-[25.239999771118164px] max-w-[89.68000030517578px] relative shrink-0 w-[44.849px]" data-name="tft-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-full" src={imgTftHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] min-h-[50.47999954223633px] top-[15px] w-[179.36px]" data-name="Container">
      <TftHomepagecarousellogoPng1 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="h-[10.503px] relative shrink-0 w-[11.12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.12 10.5026">
        <g id="SVG">
          <path d={svgPaths.p603a80} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="aspect-[11.119999885559082/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="h-[10.498px] relative shrink-0 w-[9.26px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.26 10.4981">
        <g id="SVG">
          <path d={svgPaths.p17d61c00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="aspect-[9.260000228881836/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg19 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="h-[10.503px] relative shrink-0 w-[7.35px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35 10.5034">
        <g id="SVG">
          <path d={svgPaths.p2356a680} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="aspect-[7.349999904632568/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg20 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bottom-[6.01px] content-stretch flex gap-[4px] items-center right-[41.25px] w-[35.73px]" data-name="Container">
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[301.25px] left-0 top-0 w-[179.36px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute aspect-[179.36000061035156/301.239990234375] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_301.25px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground8}')` }}>
      <Container46 />
    </div>
  );
}

function MaskGroup11() {
  return (
    <div className="h-[301.24px] relative shrink-0 w-full" data-name="Mask Group">
      <Background9 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-3536.63px_0_4715.5px] items-start pb-[135.56px] pl-[25.68px] pr-[89.68px] pt-[165.69px]" data-name="Link">
      <MaskGroup11 />
    </div>
  );
}

function WrHomepagecarousellogoPng1() {
  return (
    <div className="h-[25.24px] max-h-[25.239999771118164px] max-w-[89.68000030517578px] relative shrink-0 w-[44.849px]" data-name="wr-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-full" src={imgWrHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] min-h-[50.47999954223633px] top-[15px] w-[179.36px]" data-name="Container">
      <WrHomepagecarousellogoPng1 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="h-[10.503px] relative shrink-0 w-[7.35px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35 10.5034">
        <g id="SVG">
          <path d={svgPaths.p2356a680} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="aspect-[7.349999904632568/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg21 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bottom-[6.01px] content-stretch flex items-center right-[41.25px] w-[7.35px]" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[301.25px] left-0 top-0 w-[179.36px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute aspect-[179.36000061035156/301.239990234375] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_301.25px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground8}')` }}>
      <Container52 />
    </div>
  );
}

function MaskGroup12() {
  return (
    <div className="h-[301.24px] relative shrink-0 w-full" data-name="Mask Group">
      <Background10 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-3831.35px_0_5010.22px] items-start pb-[135.56px] pl-[25.68px] pr-[89.68px] pt-[165.69px]" data-name="Link">
      <MaskGroup12 />
    </div>
  );
}

function LorHomepagecarousellogoPng1() {
  return (
    <div className="h-[25.24px] max-h-[25.239999771118164px] max-w-[89.68000030517578px] relative shrink-0 w-[44.849px]" data-name="lor-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-full" src={imgLorHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] min-h-[50.47999954223633px] top-[15px] w-[179.36px]" data-name="Container">
      <LorHomepagecarousellogoPng1 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="h-[10.503px] relative shrink-0 w-[11.12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.12 10.5026">
        <g id="SVG">
          <path d={svgPaths.p603a80} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="aspect-[11.119999885559082/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg22 />
    </div>
  );
}

function Svg23() {
  return (
    <div className="h-[10.503px] relative shrink-0 w-[7.35px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35 10.5034">
        <g id="SVG">
          <path d={svgPaths.p2356a680} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="aspect-[7.349999904632568/10.5] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg23 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bottom-[6.01px] content-stretch flex gap-[4px] items-center right-[41.26px] w-[22.46px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[301.25px] left-0 top-0 w-[179.36px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute aspect-[179.36000061035156/301.239990234375] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_301.25px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground8}')` }}>
      <Container56 />
    </div>
  );
}

function MaskGroup13() {
  return (
    <div className="h-[301.24px] relative shrink-0 w-full" data-name="Mask Group">
      <Background11 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-4126.07px_0_5304.94px] items-start pb-[135.56px] pl-[25.68px] pr-[89.68px] pt-[165.69px]" data-name="Link">
      <MaskGroup13 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[602.49px] left-[816px] top-[131px] w-[1473.59px]" data-name="Container">
      <Frame />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative size-full">
      <Container />
    </div>
  );
}