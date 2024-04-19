---
layout: ../../layouts/PostLayout.astro
title: "Rabbit Design System"
pubDate: 2024-04-19
description: "Radix UI + Stitches 디자인 시스템"
# image:
#     url: "https://docs.astro.build/assets/full-logo-light.png"
#     alt: "The full Astro logo."
tags: ["디자인 시스템"]
---

## 머리

디자인 시스템과 Headless UI에 관심이 많던 와중에, Stitches와 Radix UI를 이용해서 손쉽게 디자인 시스템을 제작 할 수 있다는 글을 읽고 해당 프로젝트를 시작하게 되었습니다.

-   [Stitches와 Radix를 이용해 디자인 시스템 만들기](https://itchallenger.tistory.com/887#google_vignette)

### Stitches와 Radix UI

두 라이브러리 모두 공식문서가 예제와 함께 잘 정리 되어있어서, 처음 사용해보는데도 크게 무리가 없었습니다.

#### Stitches

-   [Stitches 공식문서](https://stitches.dev/docs/introduction)

#### Radix UI

-   [Radix UI 공식문서](https://www.radix-ui.com/primitives/docs/overview/introduction)

## 프로젝트

가벼운 마음으로 만든 디자인 시스템, Radix에서 글자를 살짝 따와서 Rabbit Design System이라고 이름 짓게 되었습니다.

-   [Rabbit Design System](https://github.com/FE4902/Rabbit-Design-System)

### Config

#### colors

컨셉에 맞게 토끼의 색상으로 검정색, 흰색, 갈색을 선정했습니다. 또한, `hover`와 `active` 효과를 표현하기 위해, `oklch()` 함수를 활용하여 명도 변화를 주는 팔레트를 구성했습니다.

-   [oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)

```ts
colors: {
	dark1: `oklch(from ${color.dark} calc(l + .1) c h)`,
	dark2: `${color.dark}`,
	dark3: `oklch(from ${color.dark} calc(l - .1) c h)`,
	light1: `oklch(from ${color.light} calc(l + .1) c h)`,
	light2: `${color.light}`,
	light3: `oklch(from ${color.light} calc(l - .1) c h)`,
	brown1: `oklch(from ${color.brown} calc(l + .1) c h)`,
	brown2: `${color.brown}`,
	brown3: `oklch(from ${color.brown} calc(l - .1) c h)`,
},
```

#### sizes, space, fontSizes

4배수 디자인으로 구성하려고 했으며, 토끼의 아기자기한 느낌을 살리기 위해서 작은 수 위주로 설정했습니다.

```ts
space: {
	1: "4px",
	2: "8px",
	3: "12px",
	4: "16px",
	5: "20px",
	6: "24px",
	7: "28px",
	8: "32px",
	9: "48px",
	10: "64px",
},
sizes: {
	1: "4px",
	2: "8px",
	3: "12px",
	4: "16px",
	5: "20px",
	6: "24px",
	7: "28px",
	8: "32px",
	9: "48px",
	10: "64px",
},
fontSizes: {
	1: "12px",
	2: "14px",
	3: "16px",
	4: "20px",
	5: "24px",
	6: "32px",
},
```

#### fonts

폰트는 개인적으로 좋아하는 Pretendard를 사용했습니다.

-   [Pretendard](https://github.com/orioncactus/pretendard)

```ts
fonts: {
	pretendard: "Pretendard Variable, Pretendard, sans-serif",
},
```

### Component

#### variants

size는 small, medium, large, color는 dark, light, brown으로 항목별 세 가지 옵션이 있습니다.

```ts
variants: {
	size: {
		small: {
			// small
		},
		medium: {
			// medium
		},
		large: {
			// large
		},
	},
	color: {
		dark: {
			// dark
		},
		light: {
			// light
		},
		brown: {
			// brown
		}
	}
}
```

#### defaultVariants

`size: 'medium'`, `color: 'brown'`을 default 값으로 적용했습니다.

```ts
defaultVariants: {
	size: 'medium',
	color: 'brown',
}
```

## 이슈

### Storybook 8 설치 이슈

yarn 버전이 낮아서 생긴 이슈로 yarn 버전을 올려 해결했습니다.

```bash
yarn set version berry
```

## 맺음

원래 SCSS만을 사용하고 있었는데, Stitches의 variants 기반 스타일링을 경험하고나서 새로운 라이브러리가 왜 등장했고, 어떤 문제를 해결하기 위해서 나왔는지 생각하게 되었습니다. 앞으로도 핫한 라이브러리가 있다면 사용해보는 시간을 가지도록 하겠습니다.

디자인 시스템을 개발하면서 Stitches를 만족하며 사용했지만, 현재 Stitches는 지원이 종료된 상태입니다.

-   [Chat about the future for stitches](https://github.com/stitchesjs/stitches/discussions/1149)
