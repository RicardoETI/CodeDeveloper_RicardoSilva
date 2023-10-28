using System.ComponentModel.DataAnnotations.Schema;

namespace Project1.Models
{
    public class Exercise
    {
        public int ExerciseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int Difficulty { get; set; }
        public int Classification { get; set; }
        public TimeSpan Duration { get; set; }

        // Foreign key for the user who uploaded the exercise
        public int UserId { get; set; }

        // Navigation property to represent the uploader
        [ForeignKey("UserId")]
        [InverseProperty("UploadedExercises")]
        public User Uploader { get; set; }


    }
}
