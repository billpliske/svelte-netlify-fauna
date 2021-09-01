<script>
    import { getClient, query} from 'svelte-apollo';
    import { gql } from 'apollo-boost'
import { argsToArgsConfig } from 'graphql/type/definition';

    const GET_ARTWORKS = gql`
      {
          artworks {
        data {
          _id
          title
          description
        }
      }
    }`

      const client = getClient();
      const myartworks = query(client, { query: GET_ARTWORKS });

</script>

<h1>List of artwork</h1>
<div>
    {#await $myartworks}
  Loading...
{:then result}
{#each result.data.artworks.data as art}
<li>
  {art.title}<br>
  {art.description}
</li>
{/each}
{:catch error}
<p class="error">{error}</p>
{/await}
</div>
