document.addEventListener('DOMContentLoaded', async () => {
  const { createClient } = supabase

  const supabaseUrl = 'https://npixvhwawcatmfctohqk.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5waXh2aHdhd2NhdG1mY3RvaHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MjI3MzYsImV4cCI6MjA2MjQ5ODczNn0.ccrOt_BPElI3G2RYbUwJRH7FPn0opY8xA1B9iL7dmj4'
  const supabaseClient = createClient(supabaseUrl, supabaseKey)

  const form = document.getElementById('gameForm')
  const result = document.getElementById('result')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = {
      game: document.getElementById('game').value,
      nickname: document.getElementById('nickname').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value
    }

    const { error } = await supabaseClient
      .from('pendaftaran')
      .insert([data])

    if (error) {
      result.textContent = 'Gagal mengirim data: ' + error.message
      result.style.color = 'red'
    } else {
      result.textContent = 'Data berhasil dikirim!'
      result.style.color = 'green'
      form.reset()
    }
  })
})

