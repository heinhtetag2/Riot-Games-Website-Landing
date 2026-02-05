import svgPaths from "./svg-e3696ftrnh";
import imgValHomepageProductcardS26Png from "figma:asset/74e9f466bda6241f50bfb937c845a6da4e884fc6.png";
import imgValHomepagecarousellogoPng from "figma:asset/60072c2e9ff87c375fa1df59b4024265293d710c.png";
import imgLeagueHomepageProductcard2Png from "figma:asset/312d6235f8bb85d5a4256f51390633eb8a42cc54.png";
import imgLolHomepagecarousellogoPng from "figma:asset/963cd2c9cd11f609868b7f393905dd0b4e3c497b.png";
import imgLeagueHomepageProductcard2Png1 from "figma:asset/bbcf3375935bcd9b136357d8b3680afc14a6bc04.png";
import { imgBackground, imgBackground1 } from "./svg-p32zo";

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

function Container1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[28.92px] min-h-[97.33999633789062px] top-[28.93px] w-[345.89px]" data-name="Container">
      <ValHomepagecarousellogoPng />
    </div>
  );
}

function Svg() {
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

function Container3() {
  return (
    <div className="aspect-[21.440000534057617/20.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Svg1() {
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

function Container4() {
  return (
    <div className="aspect-[27.84000015258789/20.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Svg2() {
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

function Container5() {
  return (
    <div className="aspect-[21.440000534057617/20.25] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-[11.57px] content-stretch flex gap-[7.7px] items-center right-[79.55px] w-[86.15px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[580.95px] left-0 top-0 w-[345.89px]" data-name="Container">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[580.95px] left-0 top-0 w-[345.89px]" data-name="Overlay" />
      <Container1 />
      <Container2 />
    </div>
  );
}

function MaskGroup1() {
  return <div className="absolute inset-[-3.86px_-3.85px_-3.85px_-3.86px]" data-name="Mask Group" />;
}

function Background() {
  return (
    <div className="absolute aspect-[345.8900146484375/580.9500122070312] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_580.95px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
      <ValHomepageProductcardS26Png />
      <Container />
      <MaskGroup1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="h-[580.95px] relative shrink-0 w-[345.89px]" data-name="Mask Group">
      <Background />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col h-[602.49px] items-start pb-[8.69px] pt-[12.85px] relative shrink-0 w-[296.3px]" data-name="Link">
      <MaskGroup />
    </div>
  );
}

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

function Container7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[30px] min-h-[100.94999694824219px] top-[30px] w-[358.72px]" data-name="Container">
      <LolHomepagecarousellogoPng />
    </div>
  );
}

function Svg3() {
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

function Container9() {
  return (
    <div className="aspect-[22.229999542236328/21] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Svg4() {
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

function Container10() {
  return (
    <div className="aspect-[18.520000457763672/21] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex gap-[8.01px] items-center right-[82.5px] w-[48.76px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[602.49px] left-0 top-0 w-[358.72px]" data-name="Container">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[602.49px] left-0 top-0 w-[358.72px]" data-name="Overlay" />
      <Container7 />
      <Container8 />
    </div>
  );
}

function MaskGroup3() {
  return <div className="absolute inset-[-4px]" data-name="Mask Group" />;
}

function Background1() {
  return (
    <div className="absolute aspect-[358.7200012207031/602.489990234375] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_602.49px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <LeagueHomepageProductcard2Png />
      <Container6 />
      <MaskGroup3 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="h-[602.49px] relative shrink-0 w-[358.72px]" data-name="Mask Group">
      <Background1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col h-[602.49px] items-start relative shrink-0 w-[302.72px]" data-name="Link">
      <MaskGroup2 />
    </div>
  );
}

function LeagueHomepageProductcard2Png1() {
  return (
    <div className="absolute h-[602.49px] left-0 top-0 w-[358.72px]" data-name="league-homepage-productcard-2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.01%] w-full" src={imgLeagueHomepageProductcard2Png1} />
      </div>
    </div>
  );
}

function LolHomepagecarousellogoPng1() {
  return (
    <div className="h-[50.475px] max-h-[50.474998474121094px] max-w-[179.36000061035156px] relative shrink-0 w-[89.68px]" data-name="lol-homepagecarousellogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLolHomepagecarousellogoPng} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[30px] min-h-[100.94999694824219px] top-[30px] w-[358.72px]" data-name="Container">
      <LolHomepagecarousellogoPng1 />
    </div>
  );
}

function Svg5() {
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

function Container14() {
  return (
    <div className="aspect-[22.229999542236328/21] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Svg6() {
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

function Container15() {
  return (
    <div className="aspect-[18.520000457763672/21] content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex gap-[8.01px] items-center right-[82.5px] w-[48.76px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[602.49px] left-0 top-0 w-[358.72px]" data-name="Container">
      <div className="absolute bg-[rgba(0,0,0,0.25)] h-[602.49px] left-0 top-0 w-[358.72px]" data-name="Overlay" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function MaskGroup5() {
  return <div className="absolute inset-[-4px]" data-name="Mask Group" />;
}

function Background2() {
  return (
    <div className="absolute aspect-[358.7200012207031/602.489990234375] bg-[#808080] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_602.49px] right-0 top-0" data-name="Background" style={{ maskImage: `url('${imgBackground1}')` }}>
      <LeagueHomepageProductcard2Png1 />
      <Container11 />
      <MaskGroup5 />
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="h-[602.49px] relative shrink-0 w-[358.72px]" data-name="Mask Group">
      <Background2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col h-[602.49px] items-start relative shrink-0 w-[302.72px]" data-name="Link">
      <MaskGroup4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[227px] top-[171px]">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative size-full">
      <Frame />
    </div>
  );
}