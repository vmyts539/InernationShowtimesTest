require 'net/http'

class NoteImporter
  def self.fetch_and_import
    notes_data = fetch_external_data
    import_notes(notes_data)
  end

  private

  def self.fetch_external_data
    # Mock API connection
    # uri = URI('https://api.example.com/notes')
    # response = Net::HTTP.get(uri)
    # JSON.parse(response)

    mock_response = {
      notes: [
        { title: 'Title 1', content: 'Content 1' },
        { title: 'Title 2', content: 'Content 2' },
        { title: 'Title 3', content: 'Content 3' },
        { title: 'Title 4', content: 'Content 4' }
      ]
    }
  end

  def self.import_notes(notes_data)
    p notes_data[:notes]
    note_attributes = notes_data[:notes].map do |note_data|
      { title: note_data[:title], content: note_data[:content] }
    end

    Note.create!(note_attributes)
  end
end
