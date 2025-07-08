import MangaPanel from '@/components/MangaPanel'
import SpeechBubble from '@/components/SpeechBubble'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <MangaPanel variant="dramatic" className="max-w-md text-center p-8">
        <h1 className="manga-title text-manga-red mb-6">404</h1>
        <SpeechBubble className="mb-6">
          <p className="text-lg">
            Oops! This page got lost in the multiverse. 
            Even the best protagonists take wrong turns sometimes!
          </p>
        </SpeechBubble>
        <Button 
          variant="manga" 
          onClick={() => navigate('/')}
          className="sound-effect"
        >
          Return to Story
        </Button>
      </MangaPanel>
    </div>
  )
}

export default NotFound 