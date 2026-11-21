import Button from '../components/ui/Button'
import PageHeader from '../components/ui/PageHeader'

export default function NotFound() {
  return (
    <>
      <PageHeader label="404" title="Page not found.">
        <p>The page you requested does not exist or may have moved.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/">Back home</Button>
          <Button to="/projects" variant="secondary">Browse projects</Button>
        </div>
      </PageHeader>
    </>
  )
}
