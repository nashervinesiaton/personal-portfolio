import Button from '../components/ui/Button'
import PageHeader from '../components/ui/PageHeader'

export default function NotFound() {
  return (
    <>
      <PageHeader label="404" title="Page not found.">
        <Button to="/">Back home</Button>
      </PageHeader>
    </>
  )
}
