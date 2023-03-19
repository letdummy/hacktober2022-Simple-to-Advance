package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"google.golang.org/grpc"
	pb "test.id/learn/grpc_learn/student"
)

func getDataStudentByEmail(client pb.DataStudentClient, email string) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	s := pb.Student{
		Email: "rizkyian78@gmail.com",
	}
	student, err := client.FindStudentByEmail(ctx, &s)
	if err != nil {
		log.Fatalln("error when get student", err.Error())
	}
	fmt.Println(student)
}

func main() {
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithInsecure())
	opts = append(opts, grpc.WithBlock())

	conn, err := grpc.Dial(":9000", opts...)
	if err != nil {
		log.Fatalln("error connect to server", err.Error())
	}
	defer conn.Close()
	client := pb.NewDataStudentClient(conn)
	getDataStudentByEmail(client, "rizkyian78@gmail.com")

}
