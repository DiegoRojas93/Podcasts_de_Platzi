import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

export default class extends React.Component {

    render() {
    const { channels } = this.props

    return <Layout title='Podcasts de Platzi'>

      <ChannelGrid channels= {channels} />
    </Layout>
  }
}

export async function getServerSideProps() {
  let req = await fetch('https://api.audioboom.com/channels/recommended');
  let { body: channels } = await req.json();

  return { props: { channels: channels } };
}