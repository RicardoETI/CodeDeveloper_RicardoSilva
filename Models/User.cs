namespace Project1.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        // Navigation property for exercises uploaded by the user
        public ICollection<Exercise> UploadedExercises { get; set; }

    }
}
