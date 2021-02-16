<template>
	<div class="app">
		<Header/>
		<nuxt/>
		<Footer/>
		<div id="fb-root"></div>
	</div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
	components: {
		Header,
		Footer
	},
	head: {
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap' }
		]
	}
}
</script>

<style lang="scss">
@import "colors";

html {
	font-family: 'Rubik', sans-serif;
	font-size: 16px;
}

html[dir="rtl"] {
	text-align: right;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

a {
	text-decoration: none;
	color: $mainColor;
}

a:hover {
	text-decoration: underline;
}

.app {
	display: flex;
	flex-direction: column;
}

.row {
	display: flex;

	* {
		flex: 1;
	}
}

blockquote {
	color: #fff;
	border-radius: 5px;
	word-break: break-all;
	margin: 10px;
	padding: 10px;
	font-family: monospace;
	background-color: #ccc;
}

@media all and (min-width: 500px) {
	.app {
		margin: 0 auto;
		width: 100%;
	}
	.content, article {
		margin: 0 auto;
		width: 90%;
	}
}

@media all and (min-width: 1200px) {
	.app {
		margin: 0.5rem;
		width: auto;
	}
	.content, article {
		margin: 0 auto;
		width: 80%;
	}
}
</style>
