<template>
	<div>
		<PageIntro title="About me" subtitle="I do a lot of stuff on the internet. Here's some info about me." />
		<div v-for="group in [
			{ name: 'Personal information', rows: [
				{ prop: 'username', value: 'BeetMacol' },
				{ prop: 'pronouns', value: 'any; they/them; he/him' },
				{ prop: 'timezone', value: 'UTC+2' },
				{ prop: 'main languages', value: 'American English (en_us); Polish (pl_pl)' },
				{ prop: 'location', value: 'Poland' },
			] },
			{ name: 'Contact', rows: [
				{ prop: 'discord', value: 'BeetMacol#0944' },
				{ prop: 'e-mail', value: 'beetmacol@gmail.com' },
			] },
			{ name: 'Coding-related stuff', rows: [
				{ prop: 'favourite languages and frameworks', value: 'C++; Java; FabricMC; CMake; Vue.js; Nuxt.js' },
				{ prop: 'known languages and frameworks', value: 'Gradle; TypeScript; JavaScript; JSON; YAML; XML; HTML; CSS; Bash; Lua; C#; Qt' },
				{ prop: 'frequently used ides', value: 'Code - OSS; IntelliJ IDEA; Atom' },
				{ prop: 'other frequently used programming tools', value: 'git; GitHub; GitKraken' },
			] },
			{ name: 'My PC information', rows: [
				{ prop: 'architecture', value: 'x86_64' },
				{ prop: 'graphics card', value: 'NVIDIA GeForce GT 1030' },
				{ prop: 'processor', value: 'Intel i5-9400F (6) @ 4.100GHz' },
				{ prop: 'ram', value: '16 GiB DDR4 RAM' },
				{ prop: 'storage disks', value: '224 Gib SSD; 1.82 TiB HDD' },
				{ prop: 'main os', value: 'Arch Linux' },
				{ prop: 'secondary os', value: 'Linux Mint; Winows (I rarely boot those two)' },
				{ prop: 'desktop environment (on arch)', value: 'KDE Plasma' },
				{ prop: 'monitors', value: '2 × 1920x1080 cheap Samsung monitor' },
			] },
		]" :key="group" class="mt-2">
			<div class="text-center font-mono font-medium">{{ group.name }}</div>
			<div v-for="row in group.rows" :key="row" class="grid grid-cols-2 gap-4">
				<div class="text-right text-secondary text-base pt-0.5 font-mono">{{ row.prop }}</div>
				<div class="tracking-wider">{{ row.value }}</div>
			</div>
		</div>
	</div>
</template>