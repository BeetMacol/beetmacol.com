<template>
	<div class="bg-primary min-h-screen text-primary font-main font-light">
		<div class="bg-secondary min-w-full p-2 text-xl flex container px-4 h-11">
			<nav class="w-full my-auto flex font-mono font-normal space-x-4 flex-row">
				<div
					v-for="item in [
						{ name: 'home', url: '/' },
						{ name: 'news', url: '/news' },
						{ name: 'projects', url: '/projects' },
						{ name: 'about', url: '/me' },
					]"
					:key="item"
					class="hover:underline hover:text-select transition cursor-pointer"
				>
					<NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
				</div>
			</nav>
		</div>
		<main class="max-w-screen-lg mx-auto text-lg pt-2">
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
