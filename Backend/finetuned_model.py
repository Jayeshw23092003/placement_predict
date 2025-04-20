from sentence_transformers import SentenceTransformer

model = SentenceTransformer("Vishnu7796/my-finetuned-model")


def shortlist(job_description, students, max_stud):
  job_desc_embedding = model.encode(job_description)
  scores = []

  for stud in students:
    resume_text_embedding = model.encode(stud['resume_text'])
    scores.append([stud['id'], model.similarity(job_desc_embedding, resume_text_embedding)])

  scores.sort(key=lambda x: x[1], reverse=True)

  shortlisted_ids = [student_id for student_id, _ in scores[:max_stud]]

  return shortlisted_ids