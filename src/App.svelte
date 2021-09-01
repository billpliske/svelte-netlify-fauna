<script>
	import  ApolloClient  from "apollo-boost";
	import { setClient } from 'svelte-apollo';
	import Artwork from './Artwork.svelte'
	const client = new ApolloClient({uri: '/api/fauna-graphql'});

	setClient(client);

</script>

<main>
	<h1>Svelte artwork title</h1>
	<Artwork />
</main>