---
layout: ../../layouts/PostLayout.astro
title: "Vue3"
pubDate: 2024-08-29
description: "Vue3"
# image:
#     url: "https://docs.astro.build/assets/full-logo-light.png"
#     alt: "The full Astro logo."
tags: ["Vue"]
---

### Vue

### 디렉티브

**v-html**
이중괄호는 컨텐츠를 단순 텍스트로 이해하기 때문에, `v-html`을 이용해야함

```vue
<script setup>
const rawHtml = '<span style="color: red">This should be red.</span>';
</script>

<template>
    <p>텍스트 보간법 사용: {{ rawHtml }}</p>
    <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>
</template>
```

**v-model**

**v-if**
조건에 맞지 않는다면, 렌더링이 되지 않는다.

```vue
<div v-if="조건1"></div>
<div v-else-if="조건2"></div>
<div v-else></div>
```

-   _v-if와 v-for은 함께 사용하지 않는다!_

**v-show**
조건에 맞지 않는다면, 렌더링은 되지만 display: none으로 화면에는 보이지 않는다. <br/>
`<div v-show="조건"></div>`

**v-for**
반복되는 컴포넌트를 작업하는 디렉티브 <br/>
`<div v-for="(item, index) in items"></div>`

**v-bind**
동적인 값을 불러오는 디렉티브 <br/>
`<div :class="{active: true, 'text-red': false}"></div>`

**v-on**
이벤트를 수신하는 디렉티브 <br/>
`<div @click="doSomething"></div>`

### ref, reactive

ref
reactive

### watch, watchEffect

watch
이전 값, 현재 값 모두 필요한 경우

watchEffect
현재 값만 필요한 경우
감시하는 대상을 명시적으로 표시하지 않음

### computed

계산된 속성

get

set

### props

props

### life cycle

## vue-router

https://velog.io/@yjyoo/vue.js-Vue-Router-%EC%A0%95%EB%A6%AC

#### 설치

`npm i vue-router --template`

#### 세팅

```js
// router 폴더 > index.js
import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/Info.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history", // 해쉬 값 제거 방식
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            component: () => import("../views/Main.vue"),
        },
        {
            path: "/info",
            component: Info,
        },
    ],
});
```

#### 태그

router-link
router-view
