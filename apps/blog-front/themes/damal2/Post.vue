<template>
	<div v-if="post" class="post">
		<div class="post-headers">
			<PostBreadcrumbs :post="post"/>
			<h1>{{ post.title }}</h1>
			<p>
				<small>{{ authors }} | {{ post.created | dateTime }}</small>
			</p>
			<div v-if="post.thumbnail" class="thumbnail-container"><img :src="post.thumbnail" :alt="post.title"></div>
			<div v-if="post.short" v-html="post.short" class="post-short" />
		</div>
		<div class="post-contents">
			<article>
				<section class="post-content"
								 v-for="(content, index) in post.contents"
								 :key="index"
								 v-html="content">
				</section>
			</article>
			<div class="tags-container" v-if="post.tags.length">
				<div>Related tags:&nbsp;</div>
				<Tags :tags="post.tags"/>
			</div>
			<SharePost :post="post"/>
			<PostComments :post="post"/>
		</div>
	</div>
	<Loader v-else/>
</template>

<script>
import PostBreadcrumbs from './components/PostBreadcrumbs'
import SharePost from './components/SharePost'
import Tags from './components/Tags'
import PostComments from './components/PostComments'
import { computed } from '@nuxtjs/composition-api'
import Loader from './components/Loader'

export default {
	props: {
		post: Object,
	},
	components: { Loader, PostComments, Tags, SharePost, PostBreadcrumbs },
	setup(props) {
		return {
			authors: computed(() => props.post.authors ? props.post.authors.map(a => a.name).join(', ') : '')
		}
	}
}
</script>

<style scoped lang="scss">
@import "colors";
.post-headers {
	background-color: #202124;
	padding: 10px;
	color: $textOnDark;
}
.post-contents {
	padding: 10px;
}

.post-short {
	font-weight: bold;
	font-size: 110%;
}

.thumbnail-container {
	text-align: center;
	margin-top: 10px;
	max-height: 400px;
	overflow: hidden;

	img {
		max-width: 100%;
		max-height: 600px;
	}
}

@media all and (min-width: 1200px) {
	.thumbnail-container {
		img {
			margin-top: -5%;
			mask-image: radial-gradient($darkHeader, rgba(0,0,0,0) 80%);
		}
	}
}

.post-content, .post-short {
	padding: 10px 0;
	line-height: 150%;
}

.post-content /deep/ p {
	padding: 10px 0;
}

.tags-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 10px;
}
</style>
