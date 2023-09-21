import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Iframe test</h1>
      <p>If you are able to see and work with the form below, it means that the iframe integration with yandex form is working was successfully integrated</p>

      <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script>
      <iframe src="https://forms.yandex.ru/surveys/13480252.72f62b3c552d0259d1cf2ea7a696d167f4da0d2f/?iframe=1"
              frameBorder="0" name="ya-form-13480252.72f62b3c552d0259d1cf2ea7a696d167f4da0d2f" width="650"></iframe>
    </main>
  )
}
