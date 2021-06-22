<template>
	<div class="bg-primary min-h-screen text-primary font-main font-regular">
		<div class="bg-secondary min-w-full p-2 text-xl flex container px-4 h-11">
			<nav class="w-full my-auto flex font-mono space-x-4 flex-row">
				<div
					v-for="item in [
						{ name: 'home', url: '/' },
						{ name: 'news', url: '/news' },
						{ name: 'projects', url: '/work' },
						{ name: 'about', url: '/me' },
					]"
					:key="item"
					class="hover:underline hover:text-select transition cursor-pointer"
				>
					<NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
				</div>
			</nav>
		</div>
		<main class="py-1 px-2">
			<Nuxt />
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	head() {
		return {
			title: "BeetMacol's website",
		}
	},
})
</script>
