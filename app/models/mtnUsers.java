package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Company entity managed by ebean.
 */
@Entity
@Table(name = "mtn")
public class mtnUsers extends Model {
    private static final long serialVersionUID = 1L;

    @Id
    public Long id;

    public int phonenumber;

    public String firstname;
    public String lastname;

    public String client ;

    public int amount ;

    public Timestamp doneAt = new Timestamp(new Date().getTime());;

    public static Finder<Long, mtnUsers> find = new Finder <Long , mtnUsers> (Long.class, mtnUsers.class);


    public static void save(mtnUsers customer) {

                 customer.save();
    }

    public String toString() {
        return String.format("%s to %s", amount, client);
    }

 //  public static mtnUsers findById(Long id) {    return find.ref(id);   }



   public  static mtnUsers retrieveById(long id){return find.where().eq("id",id).findUnique();}

    public static List<mtnUsers> all() {
        return find.all();

    }


    }



