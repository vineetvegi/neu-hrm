import pymysql
from flaskext.mysql import MySQL
from flask import session, request, redirect, make_response, jsonify, json
from datetime import datetime
from flask import Flask
from flask_cors import CORS

rest = Flask(__name__)
CORS(rest)
# mysql = MySQL(rest)
rest.config['MYSQL_DATABASE_USER'] = 'root'
rest.config['MYSQL_DATABASE_PASSWORD'] = 'Maverickp2v'
rest.config['MYSQL_DATABASE_DB'] = 'nu_events'
rest.config['MYSQL_DATABASE_HOST'] = 'localhost'
# rest.config['MYSQL_DATABASE_USER'] = 'bc0a675330dd5e'
# rest.config['MYSQL_DATABASE_PASSWORD'] = '2b242bcc'
# rest.config['MYSQL_DATABASE_DB'] = 'heroku_8c67aa7e2a271a9'
# rest.config['MYSQL_DATABASE_HOST'] = 'us-cdbr-east-05.cleardb.net'

rest.config['MYSQL_CURSORCLASS'] = 'DictCursor'
rest.config['JWT_SECRET_KEY'] = 'Secret'
mysql = MySQL()
mysql.init_app(rest)


@rest.route('/add', methods=['POST'])
def add_event():
    conn = mysql.connect()
    try:
        _url = request.json['event_url']
        _time = request.json['event_time']
        _event = request.json['event_name']
        _date = request.json['event_date']
        _id = request.json['event_id']
        if _url and _time and _event and request.method == 'POST':
            sql = "INSERT INTO my_table(event_url, event_time, event_name, event_date, event_id) VALUES(%s, %s, %s, %s, %s)"
            data = (_url, _time, _event, _date, _id)
            cursor = conn.cursor()
            cursor.execute(sql, data)
            conn.commit()
            cursor.close()
            conn.close()
            return redirect('/')
        else:
            return 'Error while adding the event'
    except Exception as e:
        print(e)
        return 'Exception'


@rest.route('/')
def events():
    conn = None
    cursor = None
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM my_table;")
        rows = cursor.fetchall()
        # table = Results(rows)
        print(rows)
        # table.border = True
        return {'rows': rows}
    except Exception as e:
        print(e)
        return 'exception'
    finally:
        cursor.close()
        conn.close()


@rest.route('/update', methods=['POST'])
def update_event():
    conn = None
    cursor = None
    print(request.json)
    try:
        _url = request.json['event_url']
        _time = request.json['event_time']
        _event = request.json['event_name']
        _date = request.json['event_date']
        _id = request.json['event_id']
        print(request.json)
        # validate the received values
        if _url and _time and _event and _date and _id and request.method == 'POST':
            sql = "UPDATE my_table SET event_url=%s, event_time=%s, event_name=%s, event_date=%s WHERE event_id=%s"
            data = (_url, _time, _event, _date, _id)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sql, data)
            conn.commit()
            cursor.close()
            conn.close()
            return 'successfully updated'
        else:
            return 'Error while updating event'

    except Exception as e:
        print(e)
        return 'Exception'


@rest.route('/delete/<int:id>', methods=['DELETE'])
def delete_event(id):
    conn = None
    cursor = None
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM my_table WHERE event_id=%s", (id,))
        conn.commit()
        return 'Successfully Deleted'
    except Exception as e:
        print(e)
        return 'Exception'
    finally:
        cursor.close()
        conn.close()

@rest.route('/staff/add', methods=['POST'])
def add_staff():
    conn = mysql.connect()
    try:

        _staff_name = request.json['staff_name']
        _title = request.json['title']
        _staff_email = request.json['email']
        _phone = request.json['phone']
        _staff_id = request.json['id']

        if _staff_name and _title and _staff_email and _phone and request.method == 'POST':
            sql = "INSERT INTO staff(staff_name, title, email, phone, id) VALUES(%s, %s, %s, %s, %s)"
            data = (_staff_name, _title, _staff_email, _phone, _staff_id)
            cursor = conn.cursor()
            cursor.execute(sql, data)
            conn.commit()
            cursor.close()
            conn.close()
            return redirect('/staff')
        else:
            return 'Error while adding the staff details'
    except Exception as e:
        print(e)
        return 'Exception'


@rest.route('/staff')
def staff():
    conn = None
    cursor = None
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM staff;")
        staff = cursor.fetchall()
        # table = Results(rows)
        print(staff)
        # table.border = True
        return {'staff': staff}
    except Exception as e:
        print(e)
        return 'exception'
    finally:
        cursor.close()
        conn.close()

@rest.route('/staff/update', methods=['POST'])
def update_staff():
    conn = None
    cursor = None
    print(request.json)
    try:
        _staff_id = request.json['id']
        _staff_name = request.json['staff_name']
        _title = request.json['title']
        _staff_email = request.json['email']
        _phone = request.json['phone']
        print(request.json)
        # validate the received values
        if _staff_id and _staff_name and _title and _staff_email and _phone and request.method == 'POST':
            sql = "UPDATE staff SET staff_name=%s, title=%s, email=%s, phone=%s WHERE id=%s"
            data = (_staff_id, _staff_name, _title, _staff_email, _phone)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sql, data)
            conn.commit()
            cursor.close()
            conn.close()
            return 'successfully updated'
        else:
            return 'Error while updating event'

    except Exception as e:
        print(e)
        return 'Exception'

@rest.route('/staff/delete/<int:id>', methods=['DELETE'])
def delete_staff(id):
    conn = None
    cursor = None
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM staff WHERE id=%s", (id))
        conn.commit()
        return 'Successfully Deleted'
    except Exception as e:
        print(e)
        return 'Exception'
    finally:
        cursor.close()
        conn.close()

@rest.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 400


if __name__ == "__main__":
    rest.run()
