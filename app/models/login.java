package models;


import org.h2.engine.User;
import play.data.format.Formats;
import play.data.validation.Constraints;
import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

/**
 * Created by alexis on 4/17/2016.
 */
@Entity
@Table(name="login")
public class login extends Model {

    private static final long serialVersionUID = 1L;

    @Id
    @Constraints.Required
    @Formats.NonEmpty
    public String email;

    @Constraints.Required
    public String name;

    @Constraints.Required
    public String password;

    // -- Queries

    public static Model.Finder<String,User> find = new Model.Finder<String,User>(String.class, User.class);

    /**
     * Retrieve all users.
     */
    public static List<User> findAll() {
        return find.all();
    }

    /**
     * Retrieve a User from email.
     */
    public static User findByEmail(String email) {
        return find.where().eq("email", email).findUnique();
    }


    /**
     * Authenticate a User.
     */
    public static User authenticate(String email, String password) {
        return find.where()
                .eq("email", email)
                .eq("password", password)
                .findUnique();
    }


    public String toString() {
        return "User(" + email + ")";
    }
}
